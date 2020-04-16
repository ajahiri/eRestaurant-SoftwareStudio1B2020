import React from 'react';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavItem, MDBNavLink } from 'mdbreact';

class LogIn extends React.Component {
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

    handleLogin(event) {
        event.preventDefault();

        const username = this.refs.loginUsername.value;
        const password = this.refs.loginPassword.value;

        Meteor.loginWithPassword(username, password, (error) => {
            if (error) {
                this.setState({error: error.reason});
            } else {
                //console.log(Meteor.user()); For debugging
                this.setState({error: '', status: 'Login successful!'});
                this.refs.loginUsername.value = '';
                this.refs.loginPassword.value = '';
            }
        })
    }

    render() {
        return (
            <MDBContainer>
                <MDBNavItem>
                    <a className="navbar-text white-text" onClick={this.toggle}>Log In</a>
                </MDBNavItem>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Log In</MDBModalHeader>
                    <MDBModalBody>
                        <form onSubmit={this.handleLogin.bind(this)}>
                            <label htmlFor="loginUsername" className="grey-text">
                                Username or Email
                            </label>
                            <input ref="loginUsername" type="text" id="registerName" className="form-control" />
                            <br />
                            <label htmlFor="loginPassword" className="grey-text">
                                Password
                            </label>
                            <input ref="loginPassword" type="password" id="loginPassword" className="form-control" />
                            <div className="text-center mt-4">
                                <div className="text-danger">{this.state.error}</div>
                                <div className="text-success">{this.state.status}</div>
                                <MDBBtn color="primary" type="submit">
                                    Login
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

export default LogIn;