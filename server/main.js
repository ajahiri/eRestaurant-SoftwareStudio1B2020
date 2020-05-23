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

Meteor.publish('bookingsStaff', function(dateRange) {
    if (Meteor.userId() && (Roles.userIsInRole(Meteor.userId(),'staff') || Roles.userIsInRole(Meteor.userId(),'manager'))) {
        const currentDate = new Date();
        currentDate.setHours(0,0,0,0); //Need the "current date" to be at 00:00
        if (dateRange < 0) {
            dateRange *= -1;
            return Bookings.find(
                {
                    branch: Meteor.user().assignedBranch,
                    "date":
                        {
                            //Get last dateRange booking (0 is current day) -1 is tomorow, 1 is yesterday, etc
                            $gte: new Date((currentDate.getTime() - (dateRange * 24 * 60 * 60 * 1000))),
                            $lte: new Date((currentDate.getTime())),
                        }
                }, { sort: {date: -1} }
            );
        } else {
            return Bookings.find(
                {
                    branch: Meteor.user().assignedBranch,
                    "date":
                        {
                            //Get last dateRange booking (0 is current day) -1 is tomorow, 1 is yesterday, etc
                            $gte: new Date((currentDate.getTime())),
                            $lte: new Date((currentDate.getTime() + (dateRange * 24 * 60 * 60 * 1000))),
                        }
                }, { sort: {date: -1} }
            );
        }
    } else {
        throw new Meteor.Error('Insufficient permissions', "Insufficient permissions to sub this content.");
    }
});

Meteor.publish('bookingData', function(bookingID) {
    if (!Meteor.userId()) {
        throw new Meteor.Error('Insufficient permissions', "Insufficient permissions to sub this content.");
    }
    //console.log("Passed ID: " + bookingID);
    const relevantBooking = Bookings.findOne({_id: bookingID}); //Get our booking, safe to do so before more authentication as we aren't returning it yet.

    if (Meteor.userId() === relevantBooking.owner) {
        //console.log("Has permissions for booking.");
        return Bookings.find({_id: bookingID}); //If owner of booking, show the booking
    } else if (Roles.userIsInRole(Meteor.userId(),'admin')) {
        return Bookings.find({_id: bookingID}); //Admin is allowed to see all bookings
    } else if (Roles.userIsInRole(Meteor.userId(),'staff') || Roles.userIsInRole(Meteor.userId(),'manager')) {
        if (Meteor.user().assignedBranch !== relevantBooking.branch) {  //Ensure that for staff members, they can only see bookings relevant to their branch.
            throw new Meteor.Error('Insufficient permissions', "Insufficient permissions to sub this content.");
        } else {
            return Bookings.find({_id: bookingID}); //If staff or manager of that branch, show the booking.
        }
    } else {
        throw new Meteor.Error('Insufficient permissions', "Insufficient permissions to sub this content.");
    }
});

Meteor.startup(() => {
    Roles.createRole('admin', {unlessExists: true});
    Roles.createRole('staff', {unlessExists: true});
    Roles.createRole('manager', {unlessExists: true});
});
