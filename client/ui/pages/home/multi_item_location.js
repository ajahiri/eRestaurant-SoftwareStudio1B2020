//lib - multi_item_location.js
import React from "react";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup
} from "mdbreact";

const MultiItemlLocations = () => {
    return (
        <MDBContainer>

            <MDBCarousel activeItem={1} length={1} slide={true} showControls={true} showIndicators={false} multiItem>

                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">


                            <MDBCardGroup>
                                <MDBCol md="4">
                                    <MDBCard className="mb-2" style={{ width: "22rem" }}>
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Sapori Unici Ashfield</MDBCardTitle>
                                            <MDBCardText>
                                                <span> Address: Grimmond Ave, Ashfield NSW 2131</span>
                                                <br></br>
                                                <span> Phone: 02 446 668</span>
                                                <hr />
                                                <p><span> <strong className="font-weight-bold">Cuisine: </strong> Italian</span></p>
                                                <p><span> <strong className="font-weight-bold">Cost: </strong>  AUD/$</span ></p>
                                                <p><span>  <strong className="font-weight-bold">Open Hours: </strong> 12-3:30pm / 5-10:30pm </span></p>
                                            </MDBCardText>

                                            <MDBBtn href="/booking" color="primary"> Book Now</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBCard className="mb-2" style={{ width: "22rem" }}>
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Sapori Unici Marrickville</MDBCardTitle>
                                            <MDBCardText>
                                                <span>Address: Schwebel St, Marrickville NSW 2204</span>
                                                <br></br>
                                                <span> Phone: 02 776 878</span>
                                                <hr />
                                                <p><span> <strong className="font-weight-bold">Cuisine: </strong> Italian</span></p>
                                                <p><span> <strong className="font-weight-bold">Cost: </strong>  AUD/$</span ></p>
                                                <p><span>  <strong className="font-weight-bold">Open Hours: </strong> 4pm-12:am </span></p>
                                            </MDBCardText>

                                            <MDBBtn href="/booking" color="primary"> Book Now</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBCard className="mb-2" style={{ width: "22rem" }}>
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Sapori Unici Newtown</MDBCardTitle>
                                            <MDBCardText>
                                                <span>Address: Princes Hwy, Newtown NSW 2042</span>
                                                <br></br>
                                                <span> Phone: 02 009 443</span>
                                                <hr />
                                                <p><span> <strong className="font-weight-bold">Cuisine: </strong> Italian</span></p>
                                                <p><span> <strong className="font-weight-bold">Cost: </strong>  AUD/$</span ></p>
                                                <p><span>  <strong className="font-weight-bold">Open Hours: </strong> 11-3pm / 6-10pm </span></p>
                                            </MDBCardText>



                                            <MDBBtn href="/booking" color="primary"> Book Now</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>


                            </MDBCardGroup>


                        </MDBCarouselItem>

                    </MDBRow>

                </MDBCarouselInner>

            </MDBCarousel>



        </MDBContainer>
    );
}

export default MultiItemlLocations;
