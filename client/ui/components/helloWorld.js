import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBTypography} from "mdbreact";
import React from "react";

const Hello_world = (props) => {
    return(
        <MDBRow>
            <MDBCol>
            <MDBTypography tag="h2" className="page-heading" >Hello World!</MDBTypography>
            </MDBCol>
        </MDBRow>
    )
}

export default Hello_world;
