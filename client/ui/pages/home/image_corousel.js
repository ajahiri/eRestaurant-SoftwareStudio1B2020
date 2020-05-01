//libraries - image_corousel.js
import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBTable, MDBTableBody, MDBBtn, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,
    MDBMask, MDBCarouselCaption
} from "mdbreact";



//component
const ImageCorousel = () => {
    return (


        <div id="couresel">
            <div className="w-100 p3 h-25">
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1" >
                    <MDBCarouselInner >
                        <MDBCarouselItem itemId="1" >
                            <MDBView hover zoom >
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                    alt="First slide" />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h1 className="h1-responsive">Sapori Unici</h1>
                                <a href="/booking" className="btn btn-lg btn-secondary">Book Now</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2" >
                            <MDBView hover zoom>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                    //I tried this and it doesnt work src="../../../../public/images/chefs.jpg"

                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h1 className="h1-responsive">Authentic Italian cuisine</h1>
                                <a href="/booking" className="btn btn-lg btn-secondary">Book Now</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>


                        <MDBCarouselItem itemId="3" >
                            <MDBView hover zoom >
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <p className="lead">Located in the heart of Sydney's inner west, Sapori Unici occupies the intriguing
                                    space of a former spice market</p>
                                <a href="/booking" className="btn btn-lg btn-secondary">Book Now</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                    </MDBCarouselInner>

                </MDBCarousel>
            </div>

        </div>



    );

}

//export
export default ImageCorousel;
