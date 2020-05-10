import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalMakeOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
        modal: false,
        error: '',
        status: ''
    }
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn color= "primary" onClick={this.toggle}>Book now</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Make a Booking</MDBModalHeader>
        <MDBModalBody>
          Before proceeding to the booking, would you like to make an order now ? It will be ready once you arrive at the restaurant.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn href="/about" color="primary">Yes</MDBBtn>
          <MDBBtn href="/booking" color="primary">No</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalMakeOrder;
