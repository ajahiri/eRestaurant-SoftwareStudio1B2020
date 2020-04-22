import { Mongo } from 'meteor/mongo';

export const Bookings = new Mongo.Collection('bookings');

Bookings.schema = new SimpleSchema({
    _id: {type: String},
    branch: {type: String},
    customerName: {type: String},
    email: {type: String},
    phone: {type: String},
    GuestsNum: {type: String},
    Date: {type: String},
    Time: {type: String},
    Completed: {type: Boolean},
    Cancelled: {type: Boolean},
    createdAt: {type: Date()},
});
