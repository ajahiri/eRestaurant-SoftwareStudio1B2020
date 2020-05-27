import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon, MDBTable, MDBTableBody} from  "mdbreact";
import ic_print from "./ic_print_24px.png"

class BookingOrderSummary extends React.Component{
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
                            <hr/> 
                          <MDBTable borderless>
                                <MDBTableBody>
                                <tr>
                                    <td>1</td>
                                    <td>Spagetti Napolitan</td>
                                    <td> $18.99</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Lemon Lime Bitter</td>
                                    <td> $15.10</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Spagetti Marinarar</td>
                                    <td> $22.99</td>
                                </tr>
                                </MDBTableBody>
                            </MDBTable>
                            <MDBRow>
                            <MDBCol md="8" className="text-center">
                                <MDBCardText>
                                <p><span> <strong className="font-weight-bold">Total</strong> </span></p>
                                </MDBCardText> 
                            </MDBCol>


                            <MDBCol md="4" >
                                <MDBCardText className="text-center">
                                <p><span className="font-weight-bold" > $57.08 </span></p>
                                </MDBCardText> 
                            </MDBCol>

                            <MDBCol className="text-center" >
                            <h6 className="font-weight-bold mb-4 p-0, text-center"><i>Order to be paid in the restaurant</i></h6>
                            </MDBCol>
                           
                           

                            </MDBRow>
                            
                           
                            <hr/>    
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

export default BookingOrderSummary;
