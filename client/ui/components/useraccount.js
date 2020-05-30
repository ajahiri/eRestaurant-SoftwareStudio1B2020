import React from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBTableHead,
    MDBTableBody,
    MDBTable,
} from "mdbreact";
import { Accounts } from 'meteor/accounts-base';
import {Link} from "react-router-dom";
import {Bookings} from "../../../imports/collections/Bookings";


var namechanged = false, phonechanged = false, changepassword = false ;
class UserAcount extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = {fullname: '', passwordlabel: "Change Password Field Only if you want to update it", phone: "",oldpassword: "", newpassword: ""};
        //methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        const target = event.target;
        //console.log(target.name);
        //console.log(target.value);

        const value = target.name === 'WhiteOne' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if(name == 'fullname')
            namechanged = true;
        if(name == 'phone')
            phonechanged = true;
        if(name == 'phone')
            phonechanged = true;

        if(name == "oldpassword")
        {
            changepassword = true;
        }
    }
        
    handleSubmit(event)
    {
        event.preventDefault();
        if(namechanged)
        {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": this.state.fullname}});
            namechanged = false;
        }
        if(phonechanged)
        {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.phone": this.state.phone}});
            phonechanged = false;
        }
        //console.log(changepassword);
        //console.log(this.state.oldpassword);
        //console.log(this.state.newpassword);
        if(changepassword)
        {
            Accounts.changePassword(this.state.oldpassword, this.state.newpassword,  (e) => {
                if (e) {
                    //console.log(e);
                    this.setState({passwordlabel: e.reason});
                } else {
                    this.setState({passwordlabel: "success"});
                }
            });
        }
    }

    renderBookingRows() {
        return this.props.userBookings.map(booking => {
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
                    <td>{booking.specialRequest}</td>
                </tr>
            );
        });
    };

    render() {
        if(this.props.currentUser && this.props.isReady) {
            return (
                <MDBContainer>
                    <form onSubmit={this.handleSubmit} >
                        <MDBRow>
                        <h2 >Welcome to Account details {Meteor.user().profile.name}</h2>
                        </MDBRow>
                        <MDBRow>
                        <MDBCol className="form-inline" sm="12">
                            <MDBCol sm="6" md="3">
                                <span className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Name:</strong> {Meteor.user().profile.name}</span>
                            </MDBCol>
                            <MDBCol sm="6" md="3">
                                <MDBInput label="Full Name" size="lg" name='fullname' type="text" onChange={this.handleChange} />
                            </MDBCol>
                            <MDBCol sm="6">
                                {namechanged ? <span>Change Fullname to {this.state.fullname}</span> : <span></span>}
                            </MDBCol>
                        </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol  className="form-inline" sm="12">
                                <MDBCol sm="6" md="3">
                                <span className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Phone: </strong> {Meteor.user().profile.phone}</span>
                                </MDBCol>
                                <MDBCol sm="6" md="3">
                                    <MDBInput label="PhoneNumber" size="lg" name='phone' type="number" onChange={this.handleChange} />
                                </MDBCol>
                                <MDBCol sm="6" md="3">
                                    {phonechanged ? <span>Change Phone Number to {this.state.phone}</span> : <span></span>}
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol  className="form-inline" sm="12">
                                <MDBCol sm="6" md="4">
                                <span className="font-weight-bold" style={{fontSize: 'large'}}><strong className="badge badge-danger text-wrap ">Change Password:</strong></span>
                                </MDBCol>
                                <MDBCol  sm="6" md="4">
                                    <MDBInput label="Old Password" size="lg" name='oldpassword' type="password" onChange={this.handleChange} />
                                </MDBCol>
                                <MDBCol  sm="6" md="4">
                                    <MDBInput label="New Password" size="lg" name='newpassword' type="password" onChange={this.handleChange} />
                                </MDBCol>
                                <MDBCol sm="6" md="12">
                                    <span className="badge badge-danger text-capitalize font-weight-bold text-wrap" style={{fontSize: 'large'}}>{this.state.passwordlabel}</span>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>


                        <MDBRow center>
                            <MDBRow className='btn-confirm-padding'>
                                    <MDBCol><MDBBtn color="primary" onClick={this.handleSubmit}>Confirm Change</MDBBtn></MDBCol>
                            </MDBRow>
                        </MDBRow>
                    </form>
                    <h3>Booking History</h3>
                    <MDBTable responsive striped>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>#id</th>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                                <th>Special Requests</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.renderBookingRows()}
                        </MDBTableBody>
                    </MDBTable>
                </MDBContainer>
            );
        } else if (this.props.currentUser && !this.props.isReady) {
            return (
                <MDBContainer>
                    <MDBRow>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </MDBRow>
                </MDBContainer>
            );
        } else {
            return( 
                <MDBCol sm="6" md="12">
                    <span className="badge badge-danger text-capitalize font-weight-bold text-wrap" style={{fontSize: 'xxx-large'}}>You Must Be Logged In TO View This Page</span>
                </MDBCol>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('bookingsUser');
    return {
        userBookings: Bookings.find({},{$sort: {createdAt: -1}}).fetch(),
        currentUser: Meteor.user(),
        isReady: Meteor.subscribe('bookingsUser').ready(),
    }
})(UserAcount);