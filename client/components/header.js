import Meteor from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from 'react';
import { useCurrentUser } from 'react-meteor-hooks';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

import SignUp from "./SignUp";
import LogIn from "./LogIn";

class Header extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState(
            { isOpen: !this.state.isOpen,
            isLoggedIn: Meteor.user()}
        );
    }

    render() {
        const currentUser = Meteor.user();
        return (
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Sapori Unici</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Contact</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">About</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Book</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        {currentUser ? <p>currentUser.username</p> : <LogIn/>}
                        {currentUser ? <p>Logout</p> : <SignUp/>}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Header;