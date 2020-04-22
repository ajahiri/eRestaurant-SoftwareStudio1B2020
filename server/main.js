import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import {Branches} from "../imports/collections/Branches";

//This publish is needed for the alanning:roles to work with client
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': this.userId });
    } else {
        this.ready()
    }
})

Meteor.startup(() => {
    //Roles.addUsersToRoles("7jWdacshjxhmskDP5", ['admin']);

});
