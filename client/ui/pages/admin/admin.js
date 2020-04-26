import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import AddNewBranch from "../../components/AddNewBranch";
import StaffManagement from "../../components/StaffManagement";
import {MDBContainer} from "mdbreact";

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer>
                <StaffManagement/>
                <AddNewBranch/>
            </MDBContainer>
        );
    }
}

export default withTracker(() => {
    return {
    }
})(Admin);