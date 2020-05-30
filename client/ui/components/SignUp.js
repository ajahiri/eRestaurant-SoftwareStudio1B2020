import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader,
    MDBModalFooter, MDBNavItem,
} from 'mdbreact';
import SignUpForm from "./SignUpForm";

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = { modal: false};
    }
    //The following are from MDB component
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBNavItem>
                    <a className="navbar-text white-text" onClick={this.toggle}>SignUp</a>
                </MDBNavItem>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>SignUp</MDBModalHeader>
                    <MDBModalBody>
                        <SignUpForm/>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="primary" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default SignUp;