import React from "react";
import {MDBBtn, MDBIcon} from "mdbreact";

class PrintButton extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        //Context prop can be anything, this way the button can display "Print XXXXXXX" e.g (Print Invoice) or (Print Items) as the print can be tied to any component.
        return(
            <MDBBtn color="primary">
                Print {this.props.context} <MDBIcon icon="print" className="ml-1" />
            </MDBBtn>
        );
    }
}

export default PrintButton;