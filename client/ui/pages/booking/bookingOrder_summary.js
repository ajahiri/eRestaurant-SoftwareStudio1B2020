import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon, MDBTable, MDBTableBody} from  "mdbreact";


class BookingOrderSummary extends React.Component{
    constructor(props) {
        super(props);

        this.state = { 
          error: '', 
          status: '',
          payOnline: null
        };
    
    }

    handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      };    


    handleRadioBtn(result){
      this.setState({payOnline : result});
    }


    render(){
        return(
          <MDBContainer>
          <MDBCol>
          <MDBCard style={{ width: "45rem" }}>  
            <MDBCardBody>
              <MDBCardTitle tag="h2" className="page-heading, font-weight-bold text-center mb-3 p-3">Booking and Order Summary</MDBCardTitle>              
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
                   
                            <MDBCol className="text-left">                 
                                <form>
                                    <div className="form-check">
                                    <label>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value="option1"
                                        checked={this.state.selectedOption === "option1"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                        onClick={() => {
                                          this.handleRadioBtn(true)
                                        }
                                        }

                                        />
                                        Pay Now
                                    </label>
                                    </div>                                    
                                       
                                    <div className="form-check">
                                    <label>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value="option2"
                                        checked={this.state.selectedOption === "option2"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                        onClick={() => {
                                          this.handleRadioBtn(false)
                                        }
                                        }                                        
                                        />                                    
                                        Pay in Store
                                    </label>
                                    
                                    </div>

                                </form>
                          
                            </MDBCol>
                                                   
                            </MDBRow >
                            
                           
                            <hr/>    
                            <h6>Sapori Unici Ashfield</h6>
                            <span> Address: Grimmond Ave, Ashfield NSW 2131</span>
                            <br></br>
                            <span> Phone: 02 446 668</span>
                           
                        </MDBCol>

              </MDBRow>
                
                <MDBCol className="text-center">
                {this.state.payOnline ?
                  <MDBBtn color="indigo">Proceed to Checkout</MDBBtn>
                  :
                  <MDBBtn color="indigo"> Confirm Booking Order</MDBBtn>

                }
                </MDBCol>             
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBContainer>
        )
    }
}

export default BookingOrderSummary;

