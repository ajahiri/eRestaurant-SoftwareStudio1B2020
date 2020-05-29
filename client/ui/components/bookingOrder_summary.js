import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon, MDBTable, MDBTableBody} from  "mdbreact";


class BookingOrderSummary extends React.Component{
    constructor(props) {
        super(props);

        this.totalCost = 0;

        this.state = { 
          error: '', 
          status: '',
        };
    
    }

    renderRows() {
      let itemNum = 0;
      let Cart = this.props.Cart;
      return Cart.map(item => {
          itemNum ++;
          this.totalCost += parseInt(item.cost);
          return (
              <tr>
                  <td>{itemNum}</td>
                  <td>{item.title}</td>
                  <td>${item.cost}</td>
              </tr>
          );
      });
    }

    render(){
      const {bookingID, guests, date, time, fullName, branchName, branchAddressNice, branchPhone} = this.props;
        return(
          <MDBContainer>
          <MDBCol>
          <MDBCard style={{ width: "45rem" }}>  
            <MDBCardBody>
              <MDBCardTitle tag="h2" className="page-heading, font-weight-bold text-center mb-3 p-3">Reservation Confirmed</MDBCardTitle>              
              <MDBRow>
                        <MDBCol className="text-center">
                            <h4 className="mb-4 p-0">
                              Booking and Order Summary  
                            </h4>

                            <h6 className=" mb-4 p-0">
                              Thank you for using eRestaurant !
                            </h6>
                            <h5 className="font-weight-bold mb-4 p-0">Order#: {bookingID} </h5>
                            <h5 className="font-weight-bold mb-4 p-0">Table for {guests} on {date} at {time}</h5>
                            <h6 className=" mb-4 p-0">{fullName}</h6>
                            <hr/> 
                            <MDBTable borderless>
                                <MDBTableBody>
                                    {this.renderRows()}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total: ${this.totalCost}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>                            
                           
                            <hr/>    
                            <h6>Sapori Unici {branchName} </h6>
                            <span> Address: {branchAddressNice} </span>
                            <br></br>
                            <span> Phone: {branchPhone} </span>
                           
                        </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBContainer>
        )
    }
}

export default BookingOrderSummary;
