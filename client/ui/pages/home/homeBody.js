
// homeBody.js
import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBTable, MDBTableBody, MDBBtn, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,
    MDBMask, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText
} from "mdbreact";

import ImageCorousel from './image_corousel';
import MultiItemlLocations from './multi_item_location';
import FooterPage from './footer_page';


const HomePage = () => {
    return (

        <div>
            <main role="main" className="inner cover">

                <ImageCorousel /> {/* not sure how to chnage the Height :( */}

                <br></br>

                <MDBContainer fluid>
                    <hr className="w-responsive mb-2" />

                    <div className="w-responsive text-left mx-auto p-3 mt-2 " >
                        <h3> Find your Table for any Occasion</h3>
                    </div>
                    <hr className="w-responsive mb-2" />
                </MDBContainer>


                <br></br>

                <MultiItemlLocations />

                <br></br>

            </main>


            <br></br>

            <FooterPage />


        </div>

    )
};

export default HomePage;
