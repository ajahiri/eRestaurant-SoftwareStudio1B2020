import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavItem, MDBNavLink } from 'mdbreact';

class LogIn extends React.Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBNavItem>
                    <MDBNavLink to="" onClick={this.toggle}>Log In</MDBNavLink>
                </MDBNavItem>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Log In</MDBModalHeader>
                    <MDBModalBody>
                        (...)
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="primary" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default LogIn;