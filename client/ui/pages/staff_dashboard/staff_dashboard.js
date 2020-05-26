import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import {MDBContainer, MDBCol, MDBTableHead, MDBTableBody, MDBTable, MDBBtn, MDBSpinner, MDBRow} from 'mdbreact';
import {Branches} from '../../../../imports/collections/Branches';
import {Bookings} from "../../../../imports/collections/Bookings";
import {Link} from "react-router-dom";

class StaffDashboard extends React.Component {
    constructor(props) {
        super(props);
        Session.set('bookingRange', 0);
    }

    renderRows() {
        return this.props.bookings.map(booking => {
            const ad = booking.address;
            const bookingURL = "/bookings/" + booking._id;
            return (
                <tr key={booking._id}>
                    <td><Link to={bookingURL} className="text-primary">{booking._id}</Link></td>
                    <td>{booking.customerName}</td>
                    <td>{booking.email}</td>
                    <td>{booking.dateNice}</td>
                    <td>{booking.time}</td>
                    <td>{booking.guestNum}</td>
                    <td>
                        Items go here
                        {/*
                        {branch.staff ?
                            <ul className="staffInBranchList">
                                {branch.staff.map(staff => {
                                    return (
                                        <li key={staff.name + staff.role}>{staff.name} | {staff.role}</li>
                                    );
                                })}
                            </ul>
                            :
                            <p>No Staff</p>
                        }
                        */}
                    </td>
                    <td>{booking.specialRequest}</td>
                </tr>
            );
        });
    };

    rangeChange(event, amt) {
        Session.set('bookingRange', amt);
    };

    render() {
        if(!this.props.user)
        {
            return (
                <MDBCol center sm="6" md="12">
                    <span className="badge badge-danger text-capitalize font-weight-bold text-wrap"
                          style={{fontSize: 'xxx-large'}}>
                        You Must Be Logged In TO View This Page
                    </span>
                </MDBCol>
            );
        } else if (!this.props.branch) {
            return (
                <MDBCol center sm="6" md="12">
                    <span className="badge badge-danger text-capitalize font-weight-bold text-wrap"
                          style={{fontSize: 'xxx-large'}}>
                        You must be assigned a branch before accessing dashboard.
                    </span>
                    <p>Please speak to your manager/administrator.</p>
                </MDBCol>
            );
        } else if (this.props.isReady) {
            const address = this.props.branch.address;
            const addressNice = address.streetNumber + " " + address.street + " " +
                address.city + " " + address.postcode + " " + address.state;
            return (
                <MDBContainer>
                    {
                        this.props.branch ?
                            <div>
                                <h2>Your Branch</h2>
                                <p>Temporary representation:</p>
                                <p>ID: {this.props.branch._id}</p>
                                <p>Name: {this.props.branch.name}</p>
                                <p>Phone: {this.props.branch.phone}</p>
                                <p>Address: {addressNice}</p>
                                <p>Date: {new Date().toDateString()}</p>
                                <p>Viewing range: {Session.get('bookingRange')} Days</p>
                            </div>
                        : <div></div>
                    }

                    <h2>View Bookings</h2>
                    <MDBTable responsive striped>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>#id</th>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                                <th>Order Items</th>
                                <th>Special Requests</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.renderRows()}
                        </MDBTableBody>
                    </MDBTable>
                    <h3>Viewing Range</h3>
                    <MDBBtn onClick={(e) => {this.rangeChange(e, 0)}} >Today</MDBBtn>
                    <MDBBtn onClick={(e) => {this.rangeChange(e, -7)}}>Last 7 Days</MDBBtn>
                    <MDBBtn onClick={(e) => {this.rangeChange(e, 1)}}>Tomorrow</MDBBtn>
                    <MDBBtn onClick={(e) => {this.rangeChange(e, 7)}}>Next 7 Days</MDBBtn>
                    <MDBBtn onClick={(e) => {this.rangeChange(e, 30)}}>Next 30 Days</MDBBtn>
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

export default withTracker(() => {
    const subscriptions = {
        branchStaff: Meteor.subscribe('branchStaff'),
        bookingsStaff: Meteor.subscribe('bookingsStaff', Session.get('bookingRange'))
    }
    /*
    Meteor.subscribe('branchStaff');
    Meteor.subscribe('bookingsStaff', Session.get('bookingRange'));
    */
    return {
        userID: Meteor.userId(),
        user: Meteor.user(),
        branch: Branches.findOne(),
        bookings: Bookings.find({}, {sort: {date: 1, time: 1}}).fetch(),
        isReady: subscriptions.branchStaff.ready()
    }
})(StaffDashboard);