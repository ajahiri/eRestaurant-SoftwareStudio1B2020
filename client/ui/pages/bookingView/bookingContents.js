import React from "react";
import {Meteor} from 'meteor/meteor';
import {withTracker} from "meteor/react-meteor-data";
import {Bookings} from "../../../../imports/collections/Bookings";
import {Branches} from "../../../../imports/collections/Branches";
import {Menu} from "../../../../imports/collections/Menu";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody, MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";

import PrintButton from "../../components/PrintButton";
import ReactToPrint from "react-to-print";
import BookingInvoice from "../../components/BookingInvoice";

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

    handlePay() {
        Meteor.call('bookings.pay', this.props.bookingID, function(error) {
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

    renderMenu() {
        return this.props.menuItems.map(item => {
            return (
                <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>${item.cost}</td>
                    <td>{item.ingrediants}</td>
                    <td>
                        <MDBBtn onClick={() => {
                            Meteor.call('bookings.addItem', item, this.props.bookingID);
                        }} color="primary" >
                            Add to Order
                        </MDBBtn>
                    </td>
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
                        { booking.payed ? <li className="font-weight-bold">Payed In-Store: Payment Received</li> : <li>Payed in-Store: No Payment</li> }
                        { booking.payedOnline ? <li className="font-weight-bold">Payed Online: Payment Received</li> : <li>Payed Online: No Payment</li> }
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
                    { this.props.isStaff && !booking.payedOnline && !booking.payed ?
                        <MDBBtn onClick={() => {
                            this.handlePay()
                        }} color="secondary">
                            Mark as Payed in Store
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
                    {(this.props.isStaff) ?
                        <MDBRow>
                            <h3>Add Menu Items to Booking</h3>
                            <MDBTable responsive striped>
                                <MDBTableHead color="primary-color" textWhite>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Ingredients</th>
                                        <th>Add to Order</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {this.renderMenu()}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>
                        :
                        <div></div>
                    }
                    <BookingInvoice ref={el => (this.summaryRef = el)} booking={this.props.bookingData}/>
                    <ReactToPrint
                        className="mx-auto"
                        trigger={() => {
                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                            // to the root node of the returned component as it will be overwritten.
                            return <a href="#"><PrintButton context="Invoice" /></a>;
                        }}
                        content={() => this.summaryRef}
                    />
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
        bookingData: Meteor.subscribe('bookingData', bookingID),
        menuItems: Meteor.subscribe('menu'),
        relevantBranch: Meteor.subscribe('branchGuest'),
    }
    /*
    Meteor.subscribe('branchStaff');
    Meteor.subscribe('bookingsStaff', Session.get('bookingRange'));
    */
    return {
        userID: Meteor.userId(),
        bookingData: Bookings.findOne({_id: bookingID}),
        menuItems:  Menu.find().fetch(),
        isReady: subscriptions.bookingData.ready(),
        isStaff: Roles.userIsInRole(Meteor.userId(),['admin', 'manager', 'staff']),
    }
})(BookingContents);