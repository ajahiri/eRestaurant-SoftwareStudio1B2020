//lib - multi_item_location.js
import React from "react";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon
} from "mdbreact";
import ModalMakeOrder from "../../components/modal_make_order";
import {withTracker} from "meteor/react-meteor-data";
import {Branches} from "../../../../imports/collections/Branches";

class MultiItemLocations extends React.Component {

    renderCards() {
        return this.props.branches.map(branch => {
            const ad = branch.address;
            const addressNice = ad.streetNumber + ' ' +
                ad.street + ', ' + ad.city + ' ' + ad.postCode + ' ' + ad.state;
            return (
                <div key={branch._id}>
                <MDBCard >
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol lg="5" xl="4">
                                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                    <img className="img-fluid" src={branch.branchPromo} alt="" />

                                    <MDBMask overlay="white-slight" />

                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7" xl="8">
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>{branch.name}</strong>
                                </h3>

                                <span> Address: {addressNice}</span>
                                <br></br>
                                <span> Phone: {branch.phone}</span>
                            </MDBCol>
                            <MDBCol>
                                <br/>
                                <hr />
                                <p><span> <strong className="font-weight-bold">Cuisine: </strong> Italian</span></p>
                                <p><span>  <strong className="font-weight-bold">Open Hours: </strong>4:00pm - 10:00pm</span></p>
                                <MDBBtn color= "primary" href="/booking">Book Now</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard >

                <br/>
                </div>
            )
        })
    }

    render() {
        if (!this.props.isReady) {
            return (
                <MDBContainer>
                    <MDBRow>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </MDBRow>
                </MDBContainer>
            );
        } else {
            return (
                <MDBContainer>
                    {this.renderCards()}
                </MDBContainer>
            );
        }
    }
}

export default withTracker(() => {
    //Taken from https://guide.meteor.com/react.html#data
    Meteor.subscribe('branchGuest');
    return {
        isReady: Meteor.subscribe('branchGuest').ready(),
        branches: Branches.find().fetch(),
    }
})(MultiItemLocations);
