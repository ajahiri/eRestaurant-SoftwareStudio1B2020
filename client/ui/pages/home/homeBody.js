
// homeBody.js
import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBTable, MDBTableBody, MDBBtn, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,
    MDBMask, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText
} from "mdbreact";

import ImageCarousel from './image_carousel';
import MultiItemLocations from './multi_item_location';
import FooterPage from './footer_page';


const HomePage = () => {
    return (

        <div>
            <main role="main" className="inner cover">

                <ImageCarousel />

                <br/>

                <MDBContainer fluid>
                    <hr className="w-responsive mb-2" color="black" />

                    <div className="w-responsive text-center mx-auto p-3 mt-2 " >
                        <h3> Find your Table for any Occasion</h3>
                    </div>

                    <hr className="w-responsive mb-2" color="black"/>
                </MDBContainer>


                <br/>

                <MultiItemLocations />

                <br/>

            </main>


            <br/>

            <FooterPage />


        </div>

    )
};

export default HomePage;
