import { Meteor } from 'meteor/meteor';
import { Bookings } from '../imports/collections/Bookings.js';
import { Accounts } from 'meteor/accounts-base';
import {Branches} from "../imports/collections/Branches";
import {Menu} from "../imports/collections/Menu";
import {MenuCategory} from "../imports/collections/MenuCategory";

//This publish is needed for the alanning:roles to work with client
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': this.userId });
    } else {
        this.ready()
    }
})

Meteor.publish('menu', function () {
    return Menu.find();
  });

//   Meteor.call('menu.insert',
//   "arabian",
//   "312.50",
//   "Jordan mansaf",
//   "https://experiencejordan.com/wp-content/uploads/2016/10/Blog-Headers2-1.jpg",
//   "jaIngredients: spaghetti, tomato-paste, onion, button mushrooms, green peppers, sausage, bacon and Tabasco sauce.k",
//   function(error) {
//       if (error) {
//           console.log(error);
//       } else {
//           console.log("Successfully added branch");
//       }
//   }
// );

//   Meteor.call('menucategory.insert',
//   "classic",
//   function(error) {
//       if (error) {
//           console.log(error);
//       } else {
//           console.log("Successfully added branch");
//       }
//   }
// );

Meteor.publish('menucategory', function () {
    return MenuCategory.find();
  });

// Branches Publish, checks for user login and must be in admin group to get data.
Meteor.publish('branches', function () {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(),'admin')) {
        return Branches.find({});
    } else {
        throw new Meteor.Error('Not logged in', "Must be logged in");
    }
});

Meteor.startup(() => {
    Roles.createRole('admin', {unlessExists: true});
    Roles.createRole('staff', {unlessExists: true});
    Roles.createRole('manager', {unlessExists: true});

});
