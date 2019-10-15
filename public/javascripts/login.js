var app = new Vue({
    el: '#container',
    data: {
        username: '',
        password: ''
    },
    methods : {
      logon() {
        var vm = this;
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({username: this.username, password: this.password}),
          url: '/web/login'
        };
        axios(options)
          .then(function(response){
            window.location.href = '/web/chat';
          })
          .catch(function (error) {
            alert('Problem welcoming contact, ' + JSON.stringify(error));
          });
      }
    }
  });