import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from  "mdbreact";
import CheckOutForm from "./checkoutForm";

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
                        <CheckOutForm/>
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



