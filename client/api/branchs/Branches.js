import { Mongo } from 'meteor/mongo';

export const Branches = new Mongo.Collection('branches');

Branches.schema = new SimpleSchema({
    _id: {type: String},
    Manager: {type: String},
    Staff: {type: Object},
    "staff.name": {
        type: String
    },
    "staff.id": {
        type: String
    },
    name: {type: String},
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
    createdAt: {type: Date},
});