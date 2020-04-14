import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader,
    MDBModalFooter, MDBNavItem, MDBNavLink, MDBRow, MDBCol, MDBInput
} from 'mdbreact';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { error: '', status: '', modal: false};
    }
    //The following are from MDB component
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    //Following functions are for handling
    handleSubmit(event) {
        event.preventDefault();

        Accounts.createUser(
            {
                email: this.refs.registerEmail.value,
                password: this.refs.registerPassword.value,
                profile: {
                    phone: this.refs.registerPhone.value,
                    name: this.refs.registerName.value
                }
            }, (error) => {
            if (error) {
                this.setState({error: error.reason});
            } else {
                this.setState({error: '', status: 'Sign up successful!'});
                this.refs.registerEmail.value = '';
                this.refs.registerPassword.value = '';
                this.refs.registerPhone.value = '';
                this.refs.registerName.value = '';
                this.toggle();
            }
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBNavItem>
                    <MDBNavLink to="" onClick={this.toggle}>SignUp</MDBNavLink>
                </MDBNavItem>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>SignUp</MDBModalHeader>
                    <MDBModalBody>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label htmlFor="registerName" className="grey-text">
                                Your name
                            </label>
                            <input ref="registerName" type="text" id="registerName" className="form-control" />
                            <br />
                            <label htmlFor="registerPhone" className="grey-text">
                                Mobile Number
                            </label>
                            <input ref="registerPhone" type="text" id="registerPhone" className="form-control" />
                            <br />
                            <label htmlFor="registerEmail" className="grey-text">
                                Your email
                            </label>
                            <input ref="registerEmail" type="email" id="registerEmail" className="form-control" />
                            <br />
                            <label htmlFor="registerPassword" className="grey-text">
                                Your password
                            </label>
                            <input ref="registerPassword" type="password" id="registerPassword" className="form-control" />
                            <div className="text-center mt-4">
                                <div className="text-danger">{this.state.error}</div>
                                <div className="text-success">{this.state.status}</div>
                                <MDBBtn color="primary" type="submit">
                                    Register
                                </MDBBtn>
                            </div>
                        </form>
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