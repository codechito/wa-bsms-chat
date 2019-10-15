const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const config = require("config");

var axios = require("axios");

var botId = 'b6388cf0-5ac9-4bda-99a3-a793ca8ff05b';
var bearerToken = 'ZUWqwIO89J.B9L9bSgevv.B7GfrJcaGG';
var baseUrl = 'https://eu1.whatsapp.api.sinch.com/whatsapp/v1/' + botId;

const ContactSchema = {
    "name": { type: String, required: true },
    "phone": { type: String, required: true },
    "avatar": { type: String },
    "last_message": { type: String },
    "entry": { type: Date, default: Date.now },
    "conversation": [{
        "message": { type: String, required: true },
        "type": { type: String },
        "photo": { type: String },
        "received_date": { type: Date, default: Date.now },
    }]
  };

var connection = mongoose.createConnection(config.mongodburl,{useNewUrlParser: true, useUnifiedTopology: true});

var contact = connection.model('Contacts',new Schema(ContactSchema,{collection: 'Contacts',versionKey: false}));



module.exports = function(io){

    var express = require('express');
    var router = express.Router();

    router.post('/login', function(req, res, next) {
    res.render('login');
    });
    router.post('/api/contact/add', function(req, res, next) {
        contact.create({
            name: req.body.name,
            phone: req.body.phone,
            avatar: req.body.avatar,
            conversation: []
        },function(err,result){
            if(err){
            res.status(400).json(err);
            }
            if(result){
            res.status(200).json(result);
            }
        });
    });

    router.get('/api/wa/optin/:phone', function(req, res, next) {

        var content = { numbers : [ req.params.phone ] };
        const options = {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + bearerToken,
            'Content-Type': 'application/json'
        },
        data: content,
        url: baseUrl + '/provision/optin'
        };
        axios(options)
        .then(function(response){
            res.status(200).json("optin successful");
        })
        .catch(function (error) {
            res.status(400).json(error);
        });
    });

    router.post('/api/wa/message/invite', function(req, res, next) {

        var templates = {
            burst_ticket_update : [req.body.name,'100101010'],
            burst_shipping_update : [req.body.name,'100101010'],
            burst_reservation_update : [req.body.name],
            burst_appointment_update : [req.body.name,'Schnider','Saturday 4pm']
        }
        var content = { 
            to : [ req.body.phone ],
            message : {
                "type": "template",
                "template_name": req.body.template,
                "params": templates[req.body.template]
            }
        };
        const options = {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + bearerToken,
            'Content-Type': 'application/json'
        },
        data: content,
        url: baseUrl + '/messages'
        };
        axios(options)
        .then(function(response){
            res.status(200).json("send welcome successful");
        })
        .catch(function (error) {
            res.status(400).json(error);
        });
    });

    router.post('/api/wa/message/send', function(req, res, next) {

        var content = { 
            to : [ req.body.phone ],
            message : {
                "type": "text",
                "text": req.body.message
            }
        };
        const options = {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + bearerToken,
            'Content-Type': 'application/json'
        },
        data: content,
        url: baseUrl + '/messages'
        };
        axios(options)
        .then(function(response){
            contact.updateOne({"_id" : ObjectId(req.body._id)},
                {
                    last_message:req.body.message, 
                    $push: { 
                        conversation: {
                            message: req.body.message,
                            type: "send"
                        } 
                    }
            },{multi: true},function(err,result){
                if(err){
                    res.status(400).json(err);
                }
                if(result){
                    res.status(200).json("send text successful");
                }
            });
            
        })
        .catch(function (error) {
            res.status(400).json(error);
        });
    });

    router.post('/api/wa/message/send/photo', function(req, res, next) {

        var content = { 
            to : [ req.body.phone ],
            message : {
                "type": "image",
                "url": req.body.photo,
                "caption": req.body.caption
            }
        };
        const options = {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + bearerToken,
            'Content-Type': 'application/json'
        },
        data: content,
        url: baseUrl + '/messages'
        };
        axios(options)
        .then(function(response){
            contact.updateOne({"_id" : ObjectId(req.body._id)},
                {
                    last_message:req.body.message, 
                    $push: { 
                        conversation: {
                            message: req.body.caption,
                            type: "send",
                            photo: req.body.photo,
                        } 
                    }
            },{multi: true},function(err,result){
                if(err){
                    res.status(400).json(err);
                }
                if(result){
                    res.status(200).json("send photo successful");
                }
            });
        })
        .catch(function (error) {
            res.status(400).json(error);
        });
    });

    router.get('/api/contacts', function(req, res, next) {
        contact.find()
        .limit(100)
        .sort({"entry": -1})
        .exec(function(err,result){
        if(err){
            res.status(400).json(err);
        }
        if(result){
            res.status(200).json(result);
        }
        });
    });

    router.all('/webhook', function(req, res, next) {
        if(!req.body.notifications){
            res.json("thank you for sending these");
        }
        contact.find({
            phone: req.body.notifications[0].from
        })
        .limit(1)
        .sort({"entry": -1})
        .exec(function(err,result){
        if(err){
            res.status(400).json(err);
        }
        if(result){
            contact.updateOne({"_id" : ObjectId(result[0]._id)},
                {
                    last_message:req.body.notifications[0].message.body || req.body.notifications[0].message.caption, 
                    $push: { 
                        conversation: {
                            message: req.body.notifications[0].message.body || req.body.notifications[0].message.caption,
                            type: "received",
                            photo: req.body.notifications[0].message.url,
                        } 
                    }
            },{multi: true},function(err,result){
                if(err){
                    res.status(400).json(err);
                }
                if(result){
                    io.emit('message',{
                        message: req.body.notifications[0].message.body || req.body.notifications[0].message.caption,
                        type: "received",
                        photo: req.body.notifications[0].message.url,
                    });
                    res.json("thank you for sending these");
                }
            });
        }
        });
        
    });

    return router;
}
