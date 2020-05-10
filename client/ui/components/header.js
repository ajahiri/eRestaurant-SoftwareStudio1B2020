import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from 'react';
import { useCurrentUser } from 'react-meteor-hooks';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";

import SignUp from "./SignUp";
import LogIn from "./LogIn";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

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
                            <MDBNavLink to="/contact" >Contact</MDBNavLink>
                        </MDBNavItem>
                        
                        <MDBNavItem>
                            <MDBNavLink to="/about">Menu</MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink to="/booking">Book</MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink to="/cart">Cart <MDBIcon icon="shopping-cart" /> </MDBNavLink>
                        </MDBNavItem>
                        {
                            this.props.isStaff || this.props.isManager  ?
                                <MDBNavItem>
                                    <MDBNavLink to="/staff_dashboard">Dashboard </MDBNavLink>
                                </MDBNavItem> : <div></div>
                        }
                        {
                            this.props.isAdmin ?
                            <MDBNavItem>
                                <MDBNavLink to="/admin">Admin </MDBNavLink>
                            </MDBNavItem> : <div></div>
                        }

                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                    {this.props.currentUser ?
                            <MDBNavItem>
                                <MDBNavLink to="/manageaccount">Manage Account</MDBNavLink>
                            </MDBNavItem>
                            : null }

                        {this.props.currentUser ?
                            <MDBNavItem>
                                <span className="navWelcomeText navbar-text white-text">Welcome, {this.props.currentUser.profile.name}!   </span>
                            </MDBNavItem>
                            : <LogIn/>}
                            
                        {
                            this.props.currentUser ?
                            <MDBNavItem>
                                <a className="navbar-text white-text" onClick={this.logout}>Logout</a>
                            </MDBNavItem>
                            : <SignUp />
                        }
                        
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
        isAdmin: Roles.userIsInRole(Meteor.userId(), ['admin']),
        isManager: Roles.userIsInRole(Meteor.userId(), ['manager']),
        isStaff: Roles.userIsInRole(Meteor.userId(), ['staff'])
    }
})(Header);