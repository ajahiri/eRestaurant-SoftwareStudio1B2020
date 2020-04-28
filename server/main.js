import { Meteor } from 'meteor/meteor';
import { Bookings } from '../imports/collections/Bookings.js';


Meteor.startup(() => {

});

// Meteor.methods({
//     'bookings.insert': function(branch, customerName, email, phone, guestNum, date, time) {
//         console.log("attempting to add branch");
//         Bookings.insert({
//             branch,
//             customerName,
//             email,
//             phone,
//             guestNum,
//             date,
//             time
//         });
//     }
// });