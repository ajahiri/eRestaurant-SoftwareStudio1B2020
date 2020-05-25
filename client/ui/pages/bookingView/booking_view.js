import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";

import Header from "../../components/header";
import FooterPage from "../home/footer_page";
import BookingContents from "./bookingContents";
import ReactToPrint from "react-to-print";
import PrintButton from "../../components/PrintButton";

class BookingViewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <BookingContents ref={el => (this.componentRef = el)} bookingID={this.props.match.params.bookingID} />
                <div className="container">
                    <ReactToPrint
                        trigger={() => {
                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                            // to the root node of the returned component as it will be overwritten.
                            return <a href="#"><PrintButton context="Invoice" /></a>;
                        }}
                        content={() => this.componentRef}
                    />
                </div>

                <FooterPage/>
            </div>
        );
    }
}

export default withTracker(() => {
    const subscriptions = {}
    return {}
})(BookingViewContainer);