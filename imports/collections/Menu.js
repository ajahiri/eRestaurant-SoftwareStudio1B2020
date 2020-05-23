import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Menu = new Mongo.Collection('menu');

Menu.schema = new SimpleSchema({
    category: {type: String},
    cost: {type: String},
    title: {type: String},
    image: {type: String},
    ingrediants: {type: String},
});

Meteor.methods({
    'menu.insert': function (category, cost, title, image, ingrediants) {
        // if (!this.userId) {
        //     throw new Meteor.Error('Not logged in', "Must be logged in");
        // }
        console.log("attempting to add booking");
        Menu.insert({
            category,
            cost,
            title,
            image,
            ingrediants,
        });
        console.log(Menu.find().fetch());
    }
});
