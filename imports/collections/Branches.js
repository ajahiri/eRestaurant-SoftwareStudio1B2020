import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Branches = new Mongo.Collection('branches');

Branches.schema = new SimpleSchema({
    name: {type: String},
    manager: {type: String},
    promoImage: {type: String},
    staff: [{type: Object}],
    "staff.name": {
        type: String
    },
    "staff.id": {
        type: String
    },
    "staff.role": {
        type: String
    },
    phone: {type: String},
    address: {type: Object},
    "address.unitNo": {
        type: String              //Can have unit numbers 3A 2B etc
    },
    "address.street": {
        type: String
    },
    "address.streetNumber": {
        type: String              //Using string as we might expect street numbers with special characters (e.g 1-13 or 1/34)
    },
    "address.city": {
        type: String
    },
    "address.state": {
        type: String
    },
    "address.postCode": {
        type: Number              //Australian postal codes are always numbers
    },
    capacity: {type: Number},
    createdAt: {type: Date},
});

if (Meteor.isServer) {
    Meteor.methods({
        'branches.insert': function(bName, bManager, bPhone, bAddress, bCapacity, bPromo) {
            //DEBUG console.log("attempting to add branch");
            if (this.userId) {
                if (Roles.userIsInRole(this.userId,'admin')) {
                    Branches.insert({
                        name: bName,
                        manager: bManager,
                        phone: bPhone,
                        address: bAddress,
                        capacity: bCapacity,
                        branchPromo: bPromo,
                        staff: []
                    });
                } else {
                    throw new Meteor.Error('Insufficient permissions', "Must be of role 'ADMIN'");
                }
            } else {
                throw new Meteor.Error('Not logged in', "Must be logged in");
            }
        },
        'branches.addStaff': function(staffEmail, branchID, staffRole) {
            if (!this.userId) {
                throw new Meteor.Error('Not logged in', "Must be logged in");
            } else if (!Roles.userIsInRole(this.userId,'admin')) {
                throw new Meteor.Error('Insufficient permissions', "Must be of role 'ADMIN'");
            }
            //This next if block checks if managers (THAT ARE NOT ADMINS) have are assigning to their own branch.
            //Managers should not be able to assign staff to a different branch than theirs.
            if (Roles.userIsInRole(this.userId,'manager') && this.user.assignedBranch) {
                if (!this.user.assignedBranch === branchID && !Roles.userIsInRole(this.userId,'admin')) {
                    throw new Meteor.Error('Insufficient permissions', "Managers can only assign to their own branch.");
                }
            }
            if (Branches.find({_id: branchID}).count() === 0) {
                throw new Meteor.Error('Branch not found!', "Branch could not be found");
            }

            //console.log({staffEmail, branchID, staffRole});
            const staffUser = Accounts.findUserByEmail(staffEmail);

            if (staffUser) {
                if (staffUser.assignedBranch) {
                    if (staffUser.assignedBranch !== '') {
                        throw new Meteor.Error('Logical Inconsistency', "Staff is already assigned a branch, cannot multiple times.");
                    }
                }

                // We will add the branch ID to the user object after a couple more checks in the code below.
                // The error handling above will make sure that we don't run anything else unless we know the staffID

                const staffEntry = {
                    name: staffUser.profile.name,
                    id: staffUser._id,
                    role: staffRole
                }

                // Branch update must occur first just incase the branch was not found.
                // This will make sure we do not promote a user to staff and assign it a branch
                // that does not exist in the database.
                Branches.update({_id: branchID}, {
                    $push: {
                        "staff": staffEntry
                    }
                }, {multi: false} ,function(error, affectedDocs) {
                    if(error) {
                        throw error;
                    }
                });

                // Update the user record to reflect it is not connected to a branch.
                // After this, the user is essentially a staff member and is added to the staff role group.
                Meteor.users.update({_id: staffUser._id}, {
                    $set: {assignedBranch: branchID}
                }, {multi: false}, function(error, affectedDocs) {
                    if(error) {
                        throw new Meteor.Error('Database error', "Could not update user record");
                    } else if(affectedDocs > 0) {
                        Roles.addUsersToRoles(staffUser._id, 'staff');
                    }
                });

            } else {
                throw new Meteor.Error('User not found', "Could not find user of email " + staffEmail);
            }
        },
        "getBranches.Names": function() {
            return Branches.find().map( (branch) => { console.log(branch.name); return branch.name; });
        },
        'getBranches.Capacity': function(branch) {
            return Branches.find({_id: branch}, {fields:{capacity:1}}).fetch().map(cap => {return cap.capacity;});
        },
        'getBranches.AddressNice': function (branch_id) {
            let address = Branches.find({_id: branch_id}, {fields:{address:1}}).fetch();
            let ad = address[0].address;
            let addressNice = ad.streetNumber + ' ' + ad.street + ', ' + ad.city + ' ' + ad.postcode + ' ' + ad.state;
            return addressNice;
        },
        'getBranches.Phone': function (branch_id) {
            let Phone = Branches.find({_id: branch_id}, {fields:{phone:1}}).fetch();
            return Phone[0].phone;
        },
    });
}

