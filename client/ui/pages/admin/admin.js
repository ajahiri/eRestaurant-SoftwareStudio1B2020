import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from 'react';
import AddNewBranch from "../../components/AddNewBranch";

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AddNewBranch/>
        );
    }
}

export default withTracker(() => {
    return {
    }
})(Admin);