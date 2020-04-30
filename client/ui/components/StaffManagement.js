import React from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import AddStaffForm from "./AddStaffForm";

class StaffManagement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <MDBRow>
                    <MDBCol>
                        <h2>Staff Management</h2>
                        <h3>Assign Staff to Branch</h3>
                        <AddStaffForm/>
                    </MDBCol>
                </MDBRow>
            </>
        );
    }
};

export default withTracker(() => {
    //Taken from https://guide.meteor.com/react.html#data
    //Meteor.subscribe('branches');
    return {
    }
})(StaffManagement);