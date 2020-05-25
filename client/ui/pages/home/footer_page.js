//libraries - footer_page.js
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";


//component
const FooterPage = () => {
    return (
        <MDBFooter color="indigo" className="font-small pt-4 mt-4 fixed-bottom">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="3">
                        <h3 className="title">
                            <a className="title" href="/">Sapori Unici</a>
                        </h3>
                    </MDBCol>

                    <MDBCol md="3">
                        <h3>
                            <a className="title" href="/about">Menu</a>

                        </h3>
                    </MDBCol>

                    <MDBCol md="3">
                        <h3>
                            <a className="title" href="/booking">Book</a>
                        </h3>
                    </MDBCol>

                    <MDBCol md="3">
                        <ul>
                            <h3>
                                <a className="title" href="/contact">Contact Us </a>
                            </h3>
                            <li>
                                <a className="para" href="/contact">Public and staff enquiries  <MDBIcon icon="phone" /> </a>
                            </li>


                        </ul>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>


            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} eRestaurant web app developed for Software Engineering Studio 1B.
             <a target="_blank" href="https://github.com/ajahiri/SoftwareStudio_1B2020">Github <MDBIcon fab icon="github" /></a>


                </MDBContainer>
            </div>

        </MDBFooter>
    );
}


//export
export default FooterPage;
