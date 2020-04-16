import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from 'react';
import { useCurrentUser } from 'react-meteor-hooks';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

import SignUp from "./SignUp";
import LogIn from "./LogIn";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    logout = () => {
        Meteor.logout();
    }

    render() {
        return (
            <MDBNavbar className='navBar' color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Sapori Unici</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/contact">Contact</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about">About</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/booking">Book</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        {this.props.currentUser ?
                            <MDBNavItem>
                                <span className="navWelcomeText navbar-text white-text">Welcome, {this.props.currentUser.profile.name}!   </span>
                            </MDBNavItem>
                            : <LogIn/>}
                        {this.props.currentUser ?
                            <MDBNavItem>
                                <a className="navbar-text white-text" onClick={this.logout}>Logout</a>
                            </MDBNavItem>
                            : <SignUp/> }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    }
})(Header);