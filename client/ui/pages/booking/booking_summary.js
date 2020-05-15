import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon} from  "mdbreact";
import ic_print from "./ic_print_24px.png"

class BookingSummary extends React.Component{
    constructor(props) {
        super(props);
    
    }

    render(){
        return(
          <MDBCol>
          <MDBCard style={{ width: "45rem" }}>  
            <MDBCardBody>
              <MDBCardTitle tag="h2" className="page-heading, font-weight-bold text-center mb-3 p-3">Booking Summary</MDBCardTitle>              
              <MDBRow>
                        <MDBCol className="text-center">
                            <h4 className="mb-4 p-0">
                              Reservation Confirmed  
                            </h4>

                            <h6 className=" mb-4 p-0">
                              Thank you for using eRestaurant !
                            </h6>
                            <h5 className="font-weight-bold mb-4 p-0">Order #123</h5>
                            <h5 className="font-weight-bold mb-4 p-0">Table for 2 on May 15, 2020 at 7:00pm</h5>
                            <h6 className=" mb-4 p-0">First Name Last Name</h6>
                            <hr />    
                            <h6>Sapori Unici Ashfield</h6>
                            <span> Address: Grimmond Ave, Ashfield NSW 2131</span>
                            <br></br>
                            <span> Phone: 02 446 668</span>
                           
                        </MDBCol>
              </MDBRow>

              <MDBBtn href="#"> <img src={ic_print}></img>Print</MDBBtn>
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        )
    }
}

export default BookingSummary;

