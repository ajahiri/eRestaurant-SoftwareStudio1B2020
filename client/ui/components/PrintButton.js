import React from "react";
import {MDBBtn, MDBIcon} from "mdbreact";

const PrintButton = () => {
    return(
        <MDBBtn color="primary">
            Print <MDBIcon icon="print" className="ml-1" />
        </MDBBtn>
    );
}

export default PrintButton;