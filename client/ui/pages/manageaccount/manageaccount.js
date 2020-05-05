import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import {MDBContainer} from "mdbreact";
import UserAcount from "../../components/useraccount";

class ManageAccount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer>
                <UserAcount />
            </MDBContainer>
        );
    }
}

export default withTracker(() => {
    return {
    }
})(ManageAccount);