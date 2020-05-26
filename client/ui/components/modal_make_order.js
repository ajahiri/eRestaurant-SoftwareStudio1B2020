import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalMakeOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
        modal: true,
        error: '',
    }
    this.toggle = this.toggle.bind(this);
    this.handleResult = this.handleResult.bind(this);
}

toggle() {
  this.setState({modal: !this.state.modal});
}

handleResult(result) {
  this.toggle();
  this.props.Modal_Result(result);
}

render() {
  return (
    <MDBContainer>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Make a Booking</MDBModalHeader>
        <MDBModalBody>
          Before proceeding to the booking, would you like to make an order now ? It will be ready once you arrive at the restaurant.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={()=>{this.handleResult(true);}}>Yes</MDBBtn>
          <MDBBtn color="primary" onClick={()=>{this.handleResult(false);}}>No</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalMakeOrder;
