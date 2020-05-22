import { Meteor } from 'meteor/meteor';
import { Bookings } from '../imports/collections/Bookings.js';
import { Accounts } from 'meteor/accounts-base';
import {Branches} from "../imports/collections/Branches";
import { DateTimeBranch } from '../imports/collections/DateTimeBranch'

//This publish is needed for the alanning:roles to work with client
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': this.userId });
    } else {
        this.ready()
    }
})

// Branches Publish, checks for user login and must be in admin group to get data.
Meteor.publish('branchesAdmin', function () {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(),'admin')) {
        //Safe to return all data to client as must be admin.
        //Must limit this info if branches reaches an absurd amount. (Extremely unlikely)
        return Branches.find({});
    } else {
        throw new Meteor.Error('Not logged in', "Must be logged in");
    }
});
Meteor.publish('branch_names', function () {
    return Branches.find({}, {
        fields: {
            _id: 1,
            name: 1
        }
    });
});

// Meteor.publish('date_time_branch', function () {
//     return DateTimeBranch.find({}), {}
// });

Meteor.publish('branchStaff', function () {
    if (Meteor.userId() && (Roles.userIsInRole(Meteor.userId(),'staff') || Roles.userIsInRole(Meteor.userId(),'manager'))) {
        return Branches.find({_id: Meteor.user().assignedBranch}, {
            fields: {
                _id: 1,
                name: 1,
                phone: 1,
                address: 1
            }
        });
    } else {
        throw new Meteor.Error('Insufficient permissions', "Insufficient permissions to sub this content.");
    }
});

Meteor.startup(() => {
    Roles.createRole('admin', {unlessExists: true});
    Roles.createRole('staff', {unlessExists: true});
    Roles.createRole('manager', {unlessExists: true});

    Roles.addUsersToRoles("AoLahat2WhpmjDuNw", ['admin']);
});
