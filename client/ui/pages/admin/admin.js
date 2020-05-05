import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import AddNewBranch from "../../components/AddNewBranch";
import StaffManagement from "../../components/StaffManagement";
import {MDBContainer, MDBCol} from "mdbreact";

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(Meteor.userId() && Roles.userIsInRole(Meteor.userId(), ['admin']) )
        { 
            return (
            <MDBContainer>
                <StaffManagement/>
                <AddNewBranch/>
            </MDBContainer>
            );
        }else{ 
            return(
        <MDBContainer> 
            <MDBCol center sm="6" md="12">
                <span className="badge badge-danger text-capitalize font-weight-bold text-wrap" style={{fontSize: 'xxx-large'}}>You Must Be Admin and Logged In TO View This Page</span>
            </MDBCol>
        </MDBContainer>
        );
        }
    }
}

export default withTracker(() => {
    return {
    }
})(Admin);