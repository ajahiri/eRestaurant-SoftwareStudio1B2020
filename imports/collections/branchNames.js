import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Branches } from './Bookings';
import SimpleSchema from 'simpl-schema';

const branchNames = new Mongo.Collection('branch_names');

branchNames.schema = new SimpleSchema({
    value: {type: String},
    label: {type: String},
});

Meteor.methods ({
    'branchNames.fill': function (value, lable) {
        if (!this.userId) {
            throw new Meteor.Error('Not logged in', "Must be logged in");
        }
        branchNames.insert({
            value,
            lable,
        });
    }
});

