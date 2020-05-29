import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
export const DateTimeBranch = new Mongo.Collection('date_time_branch');

DateTimeBranch.schema = new SimpleSchema({
    seatsTaken: ({type: Number}),
    available: ({type: Boolean}),
    date: ({type: String}),
    time: ({type: String}),
    branch: ({type: String})
});

Meteor.methods({
    // Called when a new combination of Date Time and Branch variables are booked.
    'date_time_branch.insert': function(date, time, branch, guestNum,) {
        DateTimeBranch.insert({
            seatsTaken: guestNum,
            available: true,
            date,
            time,
            branch,
        });
        console.log('inserted new DTB');
    },
    // Called when a combination of Date Time and Branch variables that has already been booked at least once is booked again.
    'date_time_branch.update': function(date, time, branch, guestNum,) {
        let branchCap = Meteor.call('getBranches.Capacity');
        DateTimeBranch.update({date, time, branch}, {
            $inc: { seatsTaken: guestNum },
        });
        let matches = DateTimeBranch.findOne({date, time, branch}, {fields:{seatsTaken:1}});
        if(matches.seatsTaken == branchCap) {   // if seatsTaken is = branchCap set available to false
            DateTimeBranch.update({date, time, branch}, {
                $set: { available: false },
            });
        }
        console.log('updated DTB');
    },

    'date_time_branch.check': async function (date, branch, requestedSeats,) {
        //console.log(branch + ' ' + date);
        let unavailableTimes = [];
        let branchCap = Meteor.call('getBranches.Capacity', branch);
        if (requestedSeats <= branchCap) {
            //return the times for the matched DTB documents where capacity is exceeded.
            let matches = DateTimeBranch.find({date: date, branch: branch}, {fields:{seatsTaken:1, available:1, time:1}}).fetch();  //returns the time for all DTB documents that match date and branch with seatsTaken >= branchCap
            matches.forEach((match) => {
                let totalSeats = match.seatsTaken + requestedSeats;
                //console.log("seatsTaken + requestedSeats: " + match.seatsTaken + ' + ' + requestedSeats + ' = ' + totalSeats);
                if (totalSeats > branchCap || !match.available) {
                    //console.log('unavailable time found:' + match.time);
                    unavailableTimes.push(match.time); // returns the time of all bookings for the selected date and branch if the seatsTaken of those booking are >=branchCap
                }
            })
        } else {
            //all times must be diabled
            unavailableTimes.push('All Times');
        }
        return unavailableTimes;
    },
    
    'date_time_branch.count': function (date, time, branch) {
        if (DateTimeBranch.findOne({date: date, time: time, branch: branch})) {
            let result = DateTimeBranch.findOne({date: date, time: time, branch: branch}).seatsTaken;
            console.log("Combination Method result: " + result)
            return result;
        } else {
            return 0;
        }
    },
});