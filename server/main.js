import { Meteor } from 'meteor/meteor';
import { Bookings } from '../imports/collections/Bookings.js';
import { Accounts } from 'meteor/accounts-base';
import {Branches} from "../imports/collections/Branches";
import { branchNames } from '../imports/collections/branchNames.js';

//This publish is needed for the alanning:roles to work with client
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': this.userId });
    } else {
        this.ready()
    }
})

// Branches Publish, checks for user login and must be in admin group to get data.
Meteor.publish('branches', function () {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(),'admin')) {
        return Branches.find({});
    } else {
        throw new Meteor.Error('Not logged in', "Must be logged in");
    }
});

Meteor.publish('branch_names', function () {
    Branches.find().map( (branch) => {  //fills the branchNames collection with the names and id's of each branch
    Meteor.call('branchNames.fill', branch._id, branch.name);
    });
    return branchNames.find({});

});

Meteor.startup(() => {

    Roles.createRole('admin', {unlessExists: true});
    Roles.createRole('staff', {unlessExists: true});
    Roles.createRole('manager', {unlessExists: true});

    
});
