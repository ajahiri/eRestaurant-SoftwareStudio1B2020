import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import {MDBContainer, MDBCol, MDBTableHead, MDBTableBody, MDBTable, MDBBtn} from 'mdbreact';
import {Branches} from '../../../../imports/collections/Branches';
import {Bookings} from "../../../../imports/collections/Bookings";

class StaffDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRows() {
        return this.props.bookings.map(booking => {
            const ad = booking.address;
            return (
                <tr key={booking._id}>
                    <td><a href="">{booking._id}</a></td>
                    <td>{booking.customerName}</td>
                    <td>{booking.email}</td>
                    <td>{booking.date}</td>
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

    render() {
        if(!Meteor.userId() )
        {
            return (
                <MDBCol center sm="6" md="12">
                    <span className="badge badge-danger text-capitalize font-weight-bold text-wrap"
                          style={{fontSize: 'xxx-large'}}>
                        You Must Be Logged In TO View This Page
                    </span>
                </MDBCol>
            );
        } else {
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
                                <p>Address: {JSON.stringify(this.props.branch.address, null, 2)}</p>
                                <p>Date: {JSON.stringify(new Date())}</p>
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
                    <MDBBtn>Today</MDBBtn>
                    <MDBBtn>Last 7 Days</MDBBtn>
                    <MDBBtn>Tomorrow</MDBBtn>
                    <MDBBtn>Next 7 Days</MDBBtn>
                </MDBContainer>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('branchStaff');
    Meteor.subscribe('bookingsStaff');
    return {
        branch: Branches.findOne(),
        bookings: Bookings.find().fetch()
    }
})(StaffDashboard);