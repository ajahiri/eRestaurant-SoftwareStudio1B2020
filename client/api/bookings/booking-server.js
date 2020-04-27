import '../../ui/pages/booking/booking.js';
import {Bookings} from './Bookings.js';

const addBooking = () => props.Bookings.map( () => {
    Bookings.insert({
    //branch: {type: String},
    customerName: {type: String},
    email: {type: String},
    phone: {type: String},
    GuestsNum: {type: String},
    Date: {type: String},
    Time: {type: String},
    Completed: {type: Boolean},
    Cancelled: {type: Boolean},
    });
});