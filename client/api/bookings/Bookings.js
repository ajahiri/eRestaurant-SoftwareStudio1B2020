import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Bookings = new Mongo.Collection('bookings');

Bookings.schema = new SimpleSchema({
    _id: {type: String},
    branch: {type: String},
    customerName: {type: String},
    email: {type: String},
    phone: {type: String},
    guestNum: {type: String},
    date: {type: String},
    time: {type: String},
    payed: {type: Boolean},
    concluded: {type: Boolean}, // Have the customers left the restaurant after dining. The staff member will check them out by changing this to true when the customers leave.
    cancelled: {type: Boolean}, // Has the booking been cancelled?
    createdAt: {type: Date()},
});

// const addBooking = () => /*props.Bookings.map( () => */ {
//     Bookings.insert({
//     branch: branch,
//     customerName: customerName,
//     email: email,
//     phone: phone,
//     guestNum: guestNum,
//     date: date,
//     time: time,
//     });
// }; //)
