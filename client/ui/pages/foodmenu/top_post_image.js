//libraries
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

//components
const TopPost = () => {
    return (

        <MDBCard className="card-image menuBanner">
            <div className="text-white text-center d-flex align-items-center rgba-red-accent py-5 px-4">
            <MDBCardBody>
                <MDBCardTitle> <MDBIcon icon="utensils" /> Menu 
                        
                </MDBCardTitle>
                    <h5 className="white-text">Flavoursome varieties of authentic Italian cuisine.</h5>
                
                </MDBCardBody>
            </div>
        </MDBCard>
    );
}

//export
export default TopPost;

