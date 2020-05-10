//lib - multi_item_location.js
import React from "react";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon
} from "mdbreact";
import ModalMakeOrder from "./modal_make_order";

const MultiItemlLocations = () => {
    return (
        <MDBContainer>


            <MDBCard >
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5" xl="4">
                            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                <img className="img-fluid" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />

                                <MDBMask overlay="white-slight" />

                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7" xl="8">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Sapori Unici Ashfield</strong>
                            </h3>

                            <span> Address: Grimmond Ave, Ashfield NSW 2131</span>
                            <br></br>
                            <span> Phone: 02 446 668</span>

                            
                        </MDBCol>

                        <MDBCol>
                        <br/>
                        <hr />
                        <p><span> <strong className="font-weight-bold">Cuisine: </strong> Italian</span></p>
                        <p><span> <strong className="font-weight-bold">Cost: </strong>  AUD/$</span ></p>
                        <p><span>  <strong className="font-weight-bold">Open Hours: </strong> 12-3:30pm / 5-10:30pm </span></p>
                        <ModalMakeOrder/>

                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard >

            <br />

            <MDBCard >
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5" xl="4">
                            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                <img
                                    className="img-fluid"
                                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7" xl="8">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Sapori Unici Marrickville</strong>
                            </h3>

                            <span>Address: Schwebel St, Marrickville NSW 2204</span>
                            <br></br>
                            <span> Phone: 02 776 878</span>


                        </MDBCol>

                        <MDBCol>
                            <br />
                            <hr />
                            <p><span> <strong className="font-weight-bold">Cuisine: </strong> Italian</span></p>
                            <p><span> <strong className="font-weight-bold">Cost: </strong>  AUD/$</span ></p>
                            <p><span>  <strong className="font-weight-bold">Open Hours: </strong> 11-3pm / 6-10pm </span></p>
                            <ModalMakeOrder/>
                        </MDBCol>
                    </MDBRow>
                    
                </MDBCardBody>
            </MDBCard>

            <br />

            <MDBCard>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5" xl="4">
                            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                <img
                                    className="img-fluid"
                                    src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>

                        <MDBCol lg="7" xl="8">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Sapori Unici Newtown</strong>
                            </h3>

                            <span>Address: Princes Hwy, Newtown NSW 2042</span>
                            <br></br>
                            <span> Phone: 02 009 443</span>


                        </MDBCol>

                        <MDBCol>
                            <br />
                            <hr />
                            <p><span> <strong className="font-weight-bold">Cuisine: </strong> Italian</span></p>
                            <p><span> <strong className="font-weight-bold">Cost: </strong>  AUD/$</span ></p>
                            <p><span>  <strong className="font-weight-bold">Open Hours: </strong> 4pm-12am </span></p>
                            <ModalMakeOrder/>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default MultiItemlLocations;
