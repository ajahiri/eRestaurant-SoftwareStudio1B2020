import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBDatePicker, MDBTimePicker} from  "mdbreact";
import flatpicker from "flatpickr";

class Booking extends React.Component {  
    datePicker = () => {
        const fp = flatpickr("#myID", {});
        //fp.open(); //error -> fp.open() is not a function                
    };

    render() {
        return (
            <MDBContainer> 
                <MDBRow center>
                    <MDBCol sm="4" md="4" lg="4"><MDBInput label="First Name" size="lg" /> </MDBCol>
                    <MDBCol sm="4" md="4" lg="4"><MDBInput label="Last Name" size="lg" /> </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol sm="4" md="4" lg="4"><MDBInput label="Email" size="lg" /> </MDBCol>
                    <MDBCol sm="4" md="4" lg="4"><MDBInput label="Phone" size="lg" /> </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol sm="4" md="4" lg="4"><MDBInput type="number" label="Number of Guests" size="lg" hint="0" /></MDBCol>
                    <MDBCol sm="4" md="4" lg="4"><MDBInput label="Date Picker PlaceHolder" size="lg" onClick={this.datePicker()} /></MDBCol> {/*May include ability for Owner to disable certain dates (holidays)*/}
                </MDBRow>
                <MDBRow center>
                    <h4>Time selection will go here. We will use a table format with greyed out tiles for unavailable times.</h4>
                </MDBRow>
                <MDBRow center>
                    <MDBCol sm="8" md="8" lg="8"><MDBInput type="textarea" label="Special Request" hint="Let us know if you have any special event requests!" outline size="lg" /> </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Booking;