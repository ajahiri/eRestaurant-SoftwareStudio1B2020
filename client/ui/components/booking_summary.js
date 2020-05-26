import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon} from  "mdbreact";


class BookingSummary extends React.Component{
    constructor(props) {
        super(props);
    
    }

    render(){
      const branch = this.props.branch;
      const branchName = branch.label;
      const branchAddressNice = Meteor.call('getBranches.AddressNice', branch.value);
      const branchPhone = Meteor.call('getBranches.Phone', branch.value);
        return(
          <MDBContainer>
            <MDBCol>
            <MDBCard center style={{ width: "45rem" }}>  
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
                      <h5 className="font-weight-bold mb-4 p-0">Order#: {this.props.bookingID}</h5>
                      <h5 className="font-weight-bold mb-4 p-0">Table for {this.props.guests} on {this.props.date} at {this.props.time}</h5>
                      <h6 className=" mb-4 p-0"> {this.props.fullName} </h6>
                      
                      <hr />    

                      <h6>Sapori Unici {branchName} </h6>
                      <span> Address: {branchAddressNice} </span>
                      <br></br>
                      <span> Phone: {branchPhone} </span>                            
                  </MDBCol>
                </MDBRow>
                <MDBBtn href="#" >Print</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
        )
    }
}


export default BookingSummary;