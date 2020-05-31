import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBBtn,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBAlert
} from "mdbreact";
import CheckOutForm from "./checkoutForm";

class Checkout extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        }
    }

    handleSubmit() {
        this.setState ({ loading: true });
        setTimeout(function(){
            this.setState ({ loading: false });
            this.props.handlePayment();
        }.bind(this), 5000);
    }

    render() {
        const {toggle, status, handlePayment} = this.props;
        return(
            <MDBContainer>
                <MDBModal isOpen={status} toggle={toggle} size="lg" centered>
                    <MDBModalHeader toggle={toggle}>Checkout</MDBModalHeader>
                    <MDBModalBody>
                        <CheckOutForm/>
                        {this.state.loading ? (
                            <MDBRow>
                                <div className="spinner-border mx-auto" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </MDBRow>
                        ) : (
                            <></>
                        )}
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="primary" onClick={() => this.handleSubmit()}>Confirm Payment</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default Checkout;



