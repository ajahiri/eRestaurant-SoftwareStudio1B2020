import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from  "mdbreact";

class Checkout extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {toggle, status, handlePayment} = this.props;
        return(
            <MDBContainer>
                <MDBModal isOpen={status} toggle={toggle} size="lg" centered>
                    <MDBModalHeader toggle={toggle}>Checkout</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow center>
                            <MDBCol sm="8">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">* Full Name on Card</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center>
                            <MDBCol sm="8">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">* Card Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Card Number"
                                    />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center>
                            <MDBCol sm="4" md="4" lg="4">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">* Expiration Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="MM/YY"
                                    />
                                </div>
                            </MDBCol>
                            <MDBCol sm="4" md="4" lg="4">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">* Security Code (CVV)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="XXX"
                                    />
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="primary" onClick={handlePayment}>Confirm Payment</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default Checkout;



