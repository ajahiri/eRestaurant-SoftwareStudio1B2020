import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import {MDBContainer, MDBCol, MDBTableHead, MDBTableBody, MDBTable, MDBBtn} from 'mdbreact';
import {Branches} from '../../../../imports/collections/Branches';

class StaffDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

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
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                                <th>Order Items</th>
                                <th>Special Requests</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
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
    return {
        branch: Branches.findOne(),
    }
})(StaffDashboard);