var app = new Vue({
    el: '#container',
    data: {
      contacts: [
        {
            name: 'Sujith Krishnam',
            phone: '0977804195',
            last_message: 'Hey mate, what are you upto',
            avatar: 'https://ca.slack-edge.com/T026EM5F4-U87KJFC8Z-882f1b583299-512',
            conversation: [
              {
                message: "this is a test message from sujith to chito",
                type: "received",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test message from chito to sujith",
                type: "send",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "received",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/53481acd-46ef-4249-a91f-69e1fba4252c/95d29fd5-19a0-4867-87ba-42e3b40532cf.jpg"
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "send",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/7c49bdcb-deb1-41af-83bf-ef740c3d7f8e/98fc8d43-d9e7-42e9-81a5-f32e09d4eebd.jpg"
              }
            ]
          },
          {
            name: 'Cuong Tran',
            phone: '0977804195',
            last_message: 'Hello',
            avatar: 'https://ca.slack-edge.com/T026EM5F4-U8A7H326N-gd295f81e3cd-512',
            conversation: [
              {
                message: "this is a test message from sujith to chito",
                type: "send",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "received",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/53481acd-46ef-4249-a91f-69e1fba4252c/95d29fd5-19a0-4867-87ba-42e3b40532cf.jpg"
              },
              {
                message: "this is a test message from chito to sujith",
                type: "received",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "send",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/7c49bdcb-deb1-41af-83bf-ef740c3d7f8e/98fc8d43-d9e7-42e9-81a5-f32e09d4eebd.jpg"
              }
            ]
          },
          {
            name: 'Chito Cascante',
            phone: '0977804195',
            last_message: 'im still workin on it',
            avatar: 'https://ca.slack-edge.com/T026EM5F4-U8B9Q5R62-5b82a45a361c-512',
            conversation: [
              {
                message: "this is a test message from chito to sujith",
                type: "received",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test message from sujith to chito",
                type: "send",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "received",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/53481acd-46ef-4249-a91f-69e1fba4252c/95d29fd5-19a0-4867-87ba-42e3b40532cf.jpg"
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "send",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/7c49bdcb-deb1-41af-83bf-ef740c3d7f8e/98fc8d43-d9e7-42e9-81a5-f32e09d4eebd.jpg"
              }
            ]
          },
          {
            name: 'Brad Down',
            phone: '0977804195',
            last_message: 'Hey let me know once ready',
            avatar: 'https://ca.slack-edge.com/T026EM5F4-U026EAQPT-eccbe7515eba-512',
            conversation: [
              {
                message: "this is a test message from chito to sujith",
                type: "received",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test message from sujith to chito",
                type: "send",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "received",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/53481acd-46ef-4249-a91f-69e1fba4252c/95d29fd5-19a0-4867-87ba-42e3b40532cf.jpg"
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "send",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/7c49bdcb-deb1-41af-83bf-ef740c3d7f8e/98fc8d43-d9e7-42e9-81a5-f32e09d4eebd.jpg"
              }
            ]
          },
          {
            name: 'Maria Doolan',
            phone: '0977804195',
            last_message: 'whats up',
            avatar: 'https://ca.slack-edge.com/T026EM5F4-U87F9CT88-g6b0db0f2ff8-512',
            conversation: [
              {
                message: "this is a test message from chito to sujith",
                type: "received",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test message from sujith to chito",
                type: "send",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "received",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/53481acd-46ef-4249-a91f-69e1fba4252c/95d29fd5-19a0-4867-87ba-42e3b40532cf.jpg"
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "send",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/7c49bdcb-deb1-41af-83bf-ef740c3d7f8e/98fc8d43-d9e7-42e9-81a5-f32e09d4eebd.jpg"
              }
            ]
          },
          {
            name: 'Timothy Whitfield',
            phone: '0977804195',
            last_message: 'I have more task for you',
            avatar: 'https://ca.slack-edge.com/T026EM5F4-UFW2SDDJP-g14d4d2f96af-512',
            conversation: [
              {
                message: "this is a test message from chito to sujith",
                type: "received",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test message from sujith to chito",
                type: "send",
                received_date: "",
                photo: ""
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "received",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/53481acd-46ef-4249-a91f-69e1fba4252c/95d29fd5-19a0-4867-87ba-42e3b40532cf.jpg"
              },
              {
                message: "this is a test photo message from chito to sujith",
                type: "send",
                received_date: "",
                photo: "https://wa-cnt.s3.amazonaws.com/7c49bdcb-deb1-41af-83bf-ef740c3d7f8e/98fc8d43-d9e7-42e9-81a5-f32e09d4eebd.jpg"
              }
            ]
          },
          {
            name: 'Unknown',
            phone: '0977804195',
            last_message: 'can you help completing the survey',
            avatar: 'https://ptetutorials.com/images/user-profile.png'
          },
      ],
      newContact:{
        name: "",
        phone: "",
        avatar: ""
      },
      active_id: 0,
      newMessage:{
        photo : "",
        text: ""
      },
      template:"",
      template_list: [
        "burst_ticket_update",
        "burst_shipping_update",
        "burst_reservation_update",
        "burst_appointment_update"]
    },
    methods : {
      setActive(idx) {
        this.active_id = idx
      },
      handleSave(){
        var vm = this;
        this.newContact.template = this.template;
        if(!this.newContact.avatar){
          this.newContact.avatar = 'https://ptetutorials.com/images/user-profile.png';
        }
        console.log(JSON.stringify(this.newContact));
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(this.newContact),
          url: '/whatsapp/api/contact/add'
        };
        axios(options)
          .then(function(response){
            vm.sendOptin();
          })
          .catch(function (error) {
            alert('Problem adding contact, ' + JSON.stringify(error));
          });
      },
      sendOptin(){
        var vm = this;
        const options = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          url: '/whatsapp/api/wa/optin/' + this.newContact.phone
        };
        axios(options)
          .then(function(response){
            vm.sendWelcomeMessage();
          })
          .catch(function (error) {
            console.log(error);
            alert('Problem optin contact, ' + JSON.stringify(error));
          });
      },
      sendWelcomeMessage(){
        var vm = this;
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(this.newContact),
          url: '/whatsapp/api/wa/message/invite'
        };
        axios(options)
          .then(function(response){
            vm.getContacts();
          })
          .catch(function (error) {
            alert('Problem welcoming contact, ' + JSON.stringify(error));
          });
      },
      sendText(){
        var vm = this;
        console.log("chito");
        console.log(JSON.stringify(vm.contacts[vm.active_id]));
        var vm = this;
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            phone : vm.contacts[vm.active_id].phone,
            message : vm.newMessage.text,
            _id: vm.contacts[vm.active_id]._id
          }),
          url: '/whatsapp/api/wa/message/send'
        };
        axios(options)
          .then(function(response){
            console.log("chitdfdfo");
            vm.getContacts();
          })
          .catch(function (error) {
            console.log("chitdfdfrtrtro");
            alert('Problem welcoming contact, ' + JSON.stringify(error));
          });
      },
      sendPhoto(){
        var vm = this;
        
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            phone : vm.contacts[vm.active_id].phone,
            message : vm.newMessage.text,
            photo : vm.newMessage.photo,
            _id: vm.contacts[vm.active_id]._id

          }),
          url: '/whatsapp/api/wa/message/send/photo'
        };
        axios(options)
          .then(function(response){
            vm.getContacts();
          })
          .catch(function (error) {
            alert('Problem welcoming contact, ' + JSON.stringify(error));
          });
      },
      getContacts(){
        var vm = this;
        const options = {
          method: 'GET',
          url: '/whatsapp/api/contacts'
        };
        axios(options)
          .then(function(response){
            vm.contacts = response.data;
          })
          .catch(function (error) {
            console.log(error);
            alert('Problem getting contacts, ' + JSON.stringify(error));
          });
      }
    },
    mounted : function () {
      this.getContacts();
    }
  });