import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const DateTimeBranch = new Mongo.Collection('date_time_branch');

DateTimeBranch.schema = new SimpleSchema({
    counter: ({type: Number}),
    available: ({type: Boolean}),
    date: ({type: String}),
    time: ({type: String}),
    branch: ({type: String})
});

Meteor.methods({
    'date_time_branch.insert': function(date, time, branch) {
        DateTimeBranch.insert({
            counter: 1,
            available: true,
            date,
            time,
            branch,
        });
        console.log('inserted new DTB');
    },

    'date_time_branch.update': function(date, time, branch) {
        DateTimeBranch.update({date, time, branch}, {
            $inc: { counter: 1 },
        });
        if(DateTimeBranch.findOne({date, time, branch},{fields:{counter:1}}) >= 50) {   // if counter is >= 50
            DateTimeBranch.update({date, time, branch}, {
                $set: { available: false},
            });
        }
        console.log('updated DTB');
    },
});