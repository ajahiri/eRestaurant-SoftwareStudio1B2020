import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DateTimeBranch } from './DateTimeBranch.js';
export const Bookings = new Mongo.Collection('bookings');

Bookings.schema = new SimpleSchema({
    branch: {type: String},
    customerName: {type: String},
    email: {type: String},
    phone: {type: String},
    guestNum: {type: String},
    date: {type: String},
    time: {type: String},
    specialRequest: {type: String},
    payed: {type: Boolean},
    concluded: {type: Boolean}, // Have the customers left the restaurant after dining. The staff member will check them out by changing this to true when the customers leave.
    cancelled: {type: Boolean}, // Has the booking been cancelled?
    createdAt: {type: Date()},
});

Meteor.methods({
    'bookings.insert': function(branch, customerName, email, phone, guestNum, date, time, specialRequest) {
        console.log("attempting to add booking");
        Bookings.insert({
            branch,
            customerName,
            email,
            phone,
            guestNum,
            date,
            time,
            specialRequest,
            createdAt: Date(),
        });
        console.log(Bookings.find().fetch());
        console.log(DateTimeBranch.findOne({date: date, time: time, branch: branch}));
        if (DateTimeBranch.findOne({date: date, time: time, branch: branch}) == null) {
            Meteor.call('date_time_branch.insert', date, time, branch,
            function(error) {
                if (error) {
                    console.log(error);
                }
            });
        } else {
            Meteor.call('date_time_branch.update', date, time, branch,
            function(error) {
                if (error) {
                    console.log(error);
                }
            });
        }
    },
});
