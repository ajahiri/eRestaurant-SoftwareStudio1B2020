import React from "react";
import {Meteor} from 'meteor/meteor';
import {withTracker} from "meteor/react-meteor-data";
import {Bookings} from "../../../../imports/collections/Bookings";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";

class BookingContents extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLeave() {
        Meteor.call('bookings.markLeft', this.props.bookingID, function(error) {
            if (error) console.log(error);
        });
    }

    handleCancel() {
        Meteor.call('bookings.cancel', this.props.bookingID, function(error) {
            if (error) console.log(error);
        });
    }

    renderItems() {
        return this.props.bookingData.onlineOrder.map(item => {
            return (
                <tr key={item.item_id}>
                    <td>{item.quantity}</td>
                    <td>{item.title}</td>
                    <td>${item.cost}</td>
                    <td>${item.cost * item.quantity}</td>
                </tr>
            );
        })
    }

    render() {
        if (!this.props.userID) {
            return (
                <MDBCol center sm="6" md="12">
                    <span className="badge badge-danger text-capitalize font-weight-bold text-wrap"
                          style={{fontSize: 'xxx-large'}}>
                        You Must Be Logged In TO View This Page
                    </span>
                </MDBCol>
            );
        } else if(this.props.isReady) {
            const booking = this.props.bookingData;
            return (
                <MDBContainer>
                    <h3>Hello, {booking.customerName}.</h3>
                    <p>The following information is for the booking ({booking._id}) scheduled on {booking.dateNice}.</p>
                    {booking.cancelled ? <p className="red-text">THIS BOOKING HAS BEEN CANCELLED!</p> : <></>}
                    <h4>Booking Details</h4>
                    <ul>
                        <li>Name: {booking.customerName}</li>
                        <li>Email: {booking.email}</li>
                        <li>Date: {booking.dateNice}</li>
                        <li>Number of Guests: {booking.guestNum}</li>
                        <li>Time (24 hour time): {booking.time}</li>
                        { booking.payed ? <li>Payed: Payment Received</li> : <li>Payed: No Payment</li> }
                        { booking.concluded ? <li className="font-weight-bold">Finished: Booking Finished</li> : <li>Finished: Not Finished</li> }
                        { booking.cancelled ? <li>Cancel Status: Cancelled</li> : <li>Cancel Status: Not Cancelled</li> }
                        <li>Booking ID: {booking._id}</li>
                    </ul>
                    {booking.onlineOrder ?
                        <>
                        <h4>Order Items: </h4>
                        <MDBTable responsive striped>
                            <MDBTableHead color="primary-color" textWhite>
                                <tr>
                                    <th>Qty</th>
                                    <th>Item Name</th>
                                    <th>Itm. Price</th>
                                    <th>Tot. Price</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.renderItems()}
                            </MDBTableBody>
                        </MDBTable>
                        </>
                        :
                        <></>
                    }
                    { this.props.isStaff && !booking.concluded && !booking.cancelled ?
                        <MDBBtn onClick={() => {
                            this.handleLeave()
                        }} color="secondary">
                            Mark as Complete
                        </MDBBtn>
                        :
                        <div></div>
                    }
                    { (this.props.isStaff || this.props.userID === booking.owner) && !booking.cancelled && !booking.concluded ?
                        <MDBBtn onClick={() => {
                            this.handleCancel()
                        }} color="danger" >
                            Cancel Booking
                        </MDBBtn>
                        :
                        <div></div>
                    }
                </MDBContainer>
            );
        } else {
            return (
                <MDBContainer>
                    <MDBRow>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </MDBRow>
                </MDBContainer>
            );
        }
    }
}

export default withTracker(({bookingID}) => {
    const subscriptions = {
        bookingData: Meteor.subscribe('bookingData', bookingID)
    }
    /*
    Meteor.subscribe('branchStaff');
    Meteor.subscribe('bookingsStaff', Session.get('bookingRange'));
    */
    return {
        userID: Meteor.userId(),
        bookingData: Bookings.findOne({_id: bookingID}),
        isReady: subscriptions.bookingData.ready(),
        isStaff: Roles.userIsInRole(Meteor.userId(),['admin', 'manager', 'staff'])
    }
})(BookingContents);