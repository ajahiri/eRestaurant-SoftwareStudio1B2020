import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import {MDBContainer, MDBCol} from "mdbreact";
import UserAcount from "../../components/useraccount";

class ManageAccount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(Meteor.userId() )
        { 
            return (
                <MDBContainer>
                    <UserAcount />
                </MDBContainer>
            );
        }else{ 
            return( 
        <MDBCol center sm="6" md="12">
            <span className="badge badge-danger text-capitalize font-weight-bold text-wrap" style={{fontSize: 'xxx-large'}}>You Must Be Logged In TO View This Page</span>
        </MDBCol>
        );
        }
    }
}

export default withTracker(() => {
    return {
    }
})(ManageAccount);