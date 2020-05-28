import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DateTimeBranch } from './DateTimeBranch.js';
export const Bookings = new Mongo.Collection('bookings');

Bookings.schema = new SimpleSchema({
    branch: {type: String},
    owner: {type: String},
    customerName: {type: String},
    email: {type: String},
    phone: {type: String},
    guestNum: {type: Number},
    date: {type: String},
    time: {type: String},
    specialRequest: {type: String},
    payed: {type: Boolean},
    concluded: {type: Boolean}, // Have the customers left the restaurant after dining. The staff member will check them out by changing this to true when the customers leave.
    cancelled: {type: Boolean}, // Has the booking been cancelled?
    createdAt: {type: Date},
});

Meteor.methods({
    'bookings.insert': function(branch, customerName, email, phone, guestNum, date, dateNice, time, specialRequest) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Insufficient permissions', "User must be logged in.");
        }
        console.log("attempting to add booking");
        let boooking_id = Bookings.insert({
            branch,
            owner: Meteor.userId(),
            customerName,
            email,
            phone,
            guestNum,
            date,
            dateNice,
            time,
            specialRequest,
            payed: false,
            concluded: false,
            cancelled: false,
            createdAt: Date(),
        });
        //console.log(Bookings.find().fetch());
        if (DateTimeBranch.findOne({date: dateNice, time: time, branch: branch}) == null) {
            Meteor.call('date_time_branch.insert', dateNice, time, branch, guestNum,
            function(error) {
                if (error) {
                    console.log(error);
                }
            });
        } else {
            Meteor.call('date_time_branch.update', dateNice, time, branch, guestNum,
            function(error) {
                if (error) {
                    console.log(error);
                }
            });
        }
        return boooking_id;
    },
    'getBookingID': function () {

    },

    'bookings.markLeft': function (bookingID) {
        if (!Meteor.userId()) throw new Meteor.Error('Insufficient permissions', "User must be logged in.");

        const relevantBooking = Bookings.findOne({_id: bookingID});

        if (!relevantBooking) throw new Meteor.Error('Error querying booking', "Could not find booking.");

        if ((relevantBooking.owner !== Meteor.userId()) && !Roles.userIsInRole(Meteor.userId(),['admin', 'manager', 'staff'])) throw new Meteor.Error('Insufficient permissions', "User must be staff or owner of booking.");

        Bookings.update({_id: bookingID}, { $set: {concluded: true} });
    },
    'bookings.cancel': function(bookingID) {
        if (!Meteor.userId()) throw new Meteor.Error('Insufficient permissions', "User must be logged in.");

        const relevantBooking = Bookings.findOne({_id: bookingID});

        if (!relevantBooking) throw new Meteor.Error('Error querying booking', "Could not find booking.");

        if ((relevantBooking.owner !== Meteor.userId()) && !Roles.userIsInRole(Meteor.userId(),['admin', 'manager', 'staff'])) throw new Meteor.Error('Insufficient permissions', "User must be staff or owner of booking.");

        const decrement = relevantBooking.guestNum * -1;

        DateTimeBranch.update({date: relevantBooking.dateNice, time: relevantBooking.time, branch: relevantBooking.branch}, { $inc: { seatsTaken: decrement } });

        Bookings.update({_id: bookingID}, { $set: {cancelled: true} });
    }
});
