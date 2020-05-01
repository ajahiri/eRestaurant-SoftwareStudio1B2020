//libraries contact_page.js
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

//component
class ContactPage extends React.Component {
    render() {
        return (
            <MDBContainer fluid>
                <section className="contact-section my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Contact us
                    </h2>
                    <MDBCard>
                        <MDBRow>
                            <MDBCol lg="8">
                                <MDBCardBody className="form">
                                    <h3 className="mt-4">
                                        <MDBIcon icon="envelope" className="pr-2" />
                                     Write to us:
                                </h3>
                                    <p>We take our customers feedback with great significance</p>

                                    <MDBRow>
                                        <MDBCol md="4">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-name"
                                                    label="Your name"
                                                />
                                            </div>
                                        </MDBCol>

                                        <MDBCol md="4">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-email"
                                                    label="Your email"
                                                />
                                            </div>
                                        </MDBCol>

                                        <MDBCol md="4">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-phone"
                                                    label="Your phone"
                                                />
                                            </div>
                                        </MDBCol>

                                    </MDBRow>



                                    <MDBRow>
                                        <MDBCol md="12">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-subject"
                                                    label="Subject"
                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="12">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="textarea"
                                                    id="form-contact-message"
                                                    label="Your message"
                                                />
                                                <MDBBtn rounded color="blue">
                                                    <MDBIcon icon="paper-plane" />
                                                </MDBBtn>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol lg="4">
                                <MDBCardBody className="contact text-center h-100 black-text">
                                    <h3 className="my-4 pb-2">Contact information</h3>
                                    <ul className="text-lg-left list-unstyled ml-4">
                                        <li>
                                            <p>
                                                <MDBIcon icon="map-marker-alt" className="pr-2" />
                                                New York, 94126 USA
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <MDBIcon icon="phone" className="pr-2" />
                                                + 01 234 567 89
                                                </p>
                                        </li>
                                        <li>
                                            <p>
                                                <MDBIcon icon="envelope" className="pr-2" />
                                                contact@example.com
                                                </p>
                                        </li>
                                    </ul>
                                    <hr className="hr-prime my-4" />

                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </section>

            </MDBContainer>
        );
    }
}

//export
export default ContactPage;
