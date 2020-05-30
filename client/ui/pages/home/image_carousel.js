//libraries - image_carousel.js
import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBTable, MDBTableBody, MDBBtn, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,
    MDBMask, MDBCarouselCaption
} from "mdbreact";



//component
const ImageCarousel = () => {
    return (


        <div id="carousel" className="imageCarousel">
            <div className="w-100 p3 h-25">
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true}  >
                    <MDBCarouselInner className="carouselInner">
                        <MDBCarouselItem itemId="1">
                            <MDBView hover >
                                <img
                                    className="d-block w-100"
                                    src="images/carousel1.jpg"
                                    alt="Restaurant" />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h1 className="h1-responsive">Sapori Unici</h1>
                                <a href="/booking" className="btn btn-lg btn-primary">Book Now</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src="images/carousel2.jpg"
                                    alt="Second restaurant"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h1 className="h1-responsive">Authentic Italian cuisine</h1>
                                <a href="/booking" className="btn btn-lg btn-primary">Book Now</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>


                        <MDBCarouselItem itemId="3" height="400px">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src="images/carousel3.jpg"
                                    alt="Third restaurant"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <p className="lead">Located in the heart of Sydney's inner west, Sapori Unici occupies the intriguing
                                    space of a former spice market</p>
                                <a href="/booking" className="btn btn-lg btn-primary">Book Now</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                    </MDBCarouselInner>

                </MDBCarousel>
            </div>

        </div>



    );

}

//export
export default ImageCarousel;
