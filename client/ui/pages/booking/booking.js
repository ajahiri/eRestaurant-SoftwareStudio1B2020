import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBTable, MDBTableBody, MDBBtn} from  "mdbreact";
import Flatpickr from "react-flatpickr";
import "./custom-flatpickr-theme.css";
import "./custom-table.scss";

//import {Bookings} from "../../api/bookings/Bookings.js";

class Booking extends React.Component {  
    constructor(props) {
        super(props);

        this.state = {
        available: true,
        date: new Date(),
        defaultDateFormat: "\\Se\\lect \\Date...", //Workaround: Used to display placeholder in date picker input field.
        };                                                    // altFormat is then set to the proper date format using the Flatpickr onOpen function.
    }

    render() {
        const date = this.state.date; 
        const defaultDateFormat = this.state.defaultDateFormat;

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
                    {/* Flatpickr code START */}
                    {/*May include ability for Owner to disable certain dates (holidays)*/}
                    <MDBCol sm="4" md="4" lg="4" ><div className="md-form" > {/* this div changes the input field to the mdb input field */}
                    <Flatpickr
                        className="form-control-lg" //sets input field font size to lg
                        value={date}
                        onChange={date => {
                        this.setState({ date }); // return date for the selected Date String
                        }}
                        onOpen={() => {
                            this.setState({ defaultDateFormat: "F j, Y" });
                        }}  
                        onClose={() => {
                            // Bug Fix: If backspace is used when input field is selected input field is blank
                            if (date.length==0) {
                                this.setState({ defaultDateFormat: "\\Se\\lect \\Date..." });
                                this.setState({ date: Date() }) //resets date to Date() -> returns todays date
                            }
                        }}
                        options={{
                            altInput: true, // altInput is teh human friendly format (April 22, 2020)
                            altFormat: defaultDateFormat,
                            dateFormat: "Y-m-d", //set altInput to false to use this format
                            minDate:"today",
                        }}
                    />
                    </div></MDBCol>
                    {/* Flatpickr code END */}
                </MDBRow>
                <MDBContainer>
                    <MDBRow center>
                        <MDBCol sm="8" md="8" lg="8">
                            <table className="time-selector">
                                <thead>
                                    <tr>
                                        <th> <h5 className="table-heading">Time:</h5> </th>
                                    </tr>   
                                </thead> 
                                <tbody>
                                    <tr>
                                        <td><MDBBtn color="indigo" disabled>4:00</MDBBtn></td>
                                        <td><MDBBtn color="indigo">5:00</MDBBtn></td>
                                        <td><MDBBtn color="indigo">6:00</MDBBtn></td>
                                        <td><MDBBtn color="indigo">7:00</MDBBtn></td>
                                        <td><MDBBtn color="indigo">8:00</MDBBtn></td>
                                        <td><MDBBtn color="indigo">9:00</MDBBtn></td>
                                        <td><MDBBtn color="indigo">10:00</MDBBtn></td>
                                    </tr>
                                    <tr>
                                        <td><MDBBtn color="indigo">4:30</MDBBtn></td>
                                        <td><MDBBtn color="indigo">5:30</MDBBtn></td>
                                        <td><MDBBtn color="indigo">6:30</MDBBtn></td>
                                        <td><MDBBtn color="indigo">7:30</MDBBtn></td>
                                        <td><MDBBtn color="indigo">8:30</MDBBtn></td>
                                        <td><MDBBtn color="indigo">9:30</MDBBtn></td>
                                        <td><MDBBtn color="indigo">10:30</MDBBtn></td>
                                    </tr>
                                </tbody>
                            </table>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBRow center>
                    <MDBCol sm="8" md="8" lg="8"><MDBInput type="textarea" label="Special Request" hint="Let us know if you have any special event requests!" outline size="lg" /> </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Booking;