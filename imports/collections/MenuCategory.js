import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const MenuCategory = new Mongo.Collection('menucategory');

MenuCategory.schema = new SimpleSchema({
    category: {type: String},
});

Meteor.methods({
    'menucategory.insert': function (category) {
        // if (!this.userId) {
        //     throw new Meteor.Error('Not logged in', "Must be logged in");
        // }
        console.log("attempting to add booking");
        MenuCategory.insert({
            category,
        });
        console.log(MenuCategory.find().fetch());
    }
});
