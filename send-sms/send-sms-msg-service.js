var accountSid = 'AC5167f8f21650edd66c4e6d97becf3ca8'; // Your Account SID from www.twilio.com/console
var authToken = '5f6ef76a5fd93f250c1faca0cacaccc6';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages
      .create({
         body: 'Mace Windu didnt derserve to go out like that',
         messagingServiceSid: 'MG105ebdffb4925bcf24d463b0c52a0cb9',
         to: '+19169697723'
       })
      .then(message => console.log(message.sid))
      .done();