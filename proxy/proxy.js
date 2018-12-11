var accountSid = 'AC5167f8f21650edd66c4e6d97becf3ca8'; // Your Account SID from www.twilio.com/console
var authToken = '5f6ef76a5fd93f250c1faca0cacaccc6';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

// 1. Create a Proxy service
// client.proxy.services.create({uniqueName: 'obinnas really cool proxy service'})
//                      .then(service => console.log(service.sid))
//                      .done();

// 2. Add phone numbers to Proxy service pool
// client.proxy.services('KS3932a3265fa47db47690d13bd190f175')
//             .phoneNumbers
//             .create({sid: 'PNf7aa3f1994add1225a4a39a3402d255d'}) // SID of the phone to be added
//             .then(phone_number => console.log(phone_number.sid))
//             .done();  

// 3. Create a session with the phone numbers
// client.proxy.services('KS3932a3265fa47db47690d13bd190f175')
//             .sessions
//             .create()
//             .then(session => console.log(session.sid))
//             .done();

// 4. Create a Participant in the Sessino
// client.proxy.services('KS3932a3265fa47db47690d13bd190f175')
//             .sessions('KC2c428b761403bf9fea13dea18956da7e')
//             .participants
//             .create({friendlyName: 'Obinna', identifier: '+19169697723'})
//             .then(participant => console.log(participant.sid))
//             .done(); 
// client.proxy.services('KS3932a3265fa47db47690d13bd190f175')
//             .sessions('KC2c428b761403bf9fea13dea18956da7e')
//             .participants
//             .create({friendlyName: 'Aaron', identifier: '+15106979683'})
//             .then(participant => console.log(participant.sid))
//             .done(); 


// 5. Send a message to one of the participants
// client.proxy.services('KS3932a3265fa47db47690d13bd190f175')
//             .sessions('KC2c428b761403bf9fea13dea18956da7e')
//             .participants('KP01d91cf26e7a155408de43f976bb22c2')
//             .messageInteractions
//             .create({body: 'this is a fine fine, message'})
//             .then(message_interaction => console.log(message_interaction.sid))
//             .done();

// client.proxy.services('KS3932a3265fa47db47690d13bd190f175')
//             .sessions('KC2c428b761403bf9fea13dea18956da7e')
//             .participants('KP41ed5dec90b3c58628af513b8277f6b5')
//             .messageInteractions
//             .create({body: 'this is a fine fine, message'})
//             .then(message_interaction => console.log(message_interaction.sid))
//             .done();