import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";
import React from "react";
import {Branches} from "../../../imports/collections/Branches";
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import {Bookings} from "../../../imports/collections/Bookings";
import {Menu} from "../../../imports/collections/Menu";

class BookingInvoice extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRows() {
        return this.props.booking.onlineOrder.map(item => {
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
        if (this.props.isReady) {
            //console.log(this.props.relevantBranch);
            let totalCost = 0.0;
            this.props.booking.onlineOrder.forEach(item => {
                totalCost += (parseFloat(item.cost) * parseInt(item.quantity));
            })

            const ad = this.props.relevantBranch.address;
            const addressNice = ad.streetNumber + ' ' +
                ad.street + ', ' + ad.city + ' ' + ad.postCode + ' ' + ad.state;

            return (
                <MDBRow>
                    <MDBCol>
                        <h3>Booking Invoice</h3>
                        <MDBCard className="mx-auto" style={{ width: "45rem" }}>
                            <MDBCardBody>
                                <MDBCardTitle tag="h2" className="page-heading, font-weight-bold text-center mb-3 p-3">Invoice</MDBCardTitle>
                                <MDBRow center>
                                    <h5 className=" mb-4 p-0">Booking#: {this.props.booking._id}</h5>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>

                                        <MDBRow className="text-left">
                                            <MDBCol>
                                                <h6 className=" mb-4 p-0">From:</h6>
                                                <h6 className="font-weight-bold mb-4 p-0">{this.props.relevantBranch.name}</h6>
                                                <h6 className="mb-4 p-0">{addressNice}</h6>
                                                <h6 className="mb-4 p-0">{this.props.relevantBranch.phone}</h6>
                                                <h6 className=" mb-4 p-0"><strong>Invoice date: </strong> {new Date().toDateString()}</h6>

                                            </MDBCol>
                                            <MDBCol className="text-right">
                                                <h6 className="mb-4 p-0">To: {this.props.booking.customerName}</h6>
                                            </MDBCol>


                                        </MDBRow>

                                        <h6 className="font-weight-bold mb-4 p-0">Table for {this.props.booking.guestNum} on {this.props.booking.dateNice} at {this.props.booking.time}</h6>

                                        <MDBTable borderless>
                                            <MDBTableHead>
                                                <tr>
                                                    <td>Qty.</td>
                                                    <td>Item</td>
                                                    <td>Price</td>
                                                    <td>Sub-total</td>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                {this.renderRows()}
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>Total: ${totalCost}</td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
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

export default withTracker((passedProps) => {
    const subscriptions = {
        relevantBranch: Meteor.subscribe('branchGuest'),
    }
    /*
    Meteor.subscribe('branchStaff');
    Meteor.subscribe('bookingsStaff', Session.get('bookingRange'));
    */
    return {
        relevantBranch: Branches.findOne({_id: passedProps.booking.branch}),
        isReady: subscriptions.relevantBranch.ready()
    }
})(BookingInvoice);