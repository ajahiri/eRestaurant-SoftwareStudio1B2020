//libraries
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

//components
const TopPost = () => {
    return (

        <MDBCard
            className="card-image"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1447279506476-3faec8071eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
            }} >
            <div className="text-white text-center d-flex align-items-center rgba-red-accent py-5 px-4">
            <MDBCardBody>
                <MDBCardTitle>
                        <h4 className="title"><strong> <MDBIcon icon="utensils" /> Menu </strong></h4>
                        <h5 className="white-text"><strong>flavoursome varieties of authentic Italian food</strong></h5>
                </MDBCardTitle>
                
                
                </MDBCardBody>
            </div>
        </MDBCard>



    );
}

//export
export default TopPost;

