import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";

import Header from "../../components/header";
import FooterPage from "../home/footer_page";
import BookingContents from "./bookingContents";

class BookingViewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <BookingContents bookingID={this.props.match.params.bookingID} />
                <FooterPage/>
            </div>
        );
    }
}

export default withTracker(() => {
    const subscriptions = {}
    return {}
})(BookingViewContainer);