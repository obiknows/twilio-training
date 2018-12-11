var accountSid = 'AC5167f8f21650edd66c4e6d97becf3ca8'; // Your Account SID from www.twilio.com/console
var authToken = '5f6ef76a5fd93f250c1faca0cacaccc6';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from my Twilio Training phone number <3 Obinna',
    to: '+19169697723',  // Obinnas  number
    from: '+15103984221' // From a valid Twilio number
})
.then((message) => console.log(message.sid));