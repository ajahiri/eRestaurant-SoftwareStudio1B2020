import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const MenuCategory = new Mongo.Collection('menucategory');

MenuCategory.schema = new SimpleSchema({
    category: {type: String},
    categoryitems: {type: Number},
});

Meteor.methods({
    'menucategory.insert': function (category) {
        // if (!this.userId) {
        //     throw new Meteor.Error('Not logged in', "Must be logged in");
        // }
        console.log("attempting to add category");
        MenuCategory.insert({
            category,
            categoryitems: 0,
        });
        console.log(MenuCategory.find().fetch());
    },
    'menucategory.remove': function (category) {
        // if (!this.userId) {
        //     throw new Meteor.Error('Not logged in', "Must be logged in");
        // }
        console.log("attempting to remove category");
        MenuCategory.remove(category) 
        console.log(MenuCategory.find().fetch());
    },
    'menucategory.updateplus': function (category, num) {
        // if (!this.userId) {
        //     throw new Meteor.Error('Not logged in', "Must be logged in");
        // }
        console.log("attempting to update category");
        MenuCategory.update({_id : category},{$set:{categoryitems : num}});
        console.log(MenuCategory.find().fetch());
    },
    'menucategory.update': function (categoryid, categoryname) {
        // if (!this.userId) {
        //     throw new Meteor.Error('Not logged in', "Must be logged in");
        // }
        console.log("attempting to update category");
        MenuCategory.update({_id : categoryid},{$set:{category : categoryname}});
        console.log(MenuCategory.find().fetch());
    }

});