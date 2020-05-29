import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon, MDBTable, MDBTableBody} from  "mdbreact";
import Checkout from './checkout.js';


class BookingOrderConfirm extends React.Component{
    constructor(props) {
        super(props);

        this.totalCost = 0;

        this.state = { 
          error: '', 
          status: '',
          modal_status: false,
        };
        this.renderRows = this.renderRows.bind(this);
        this.toggle_Modal = this.toggle_Modal.bind(this);
    }

    toggle_Modal() {
        this.setState({modal_status: !this.state.modal_status});
    }

    renderRows() {
        this.totalCost = 0;
        let itemNum = 0;
        let Cart = this.props.Cart;
        return Cart.map(item => {
            itemNum ++;
            this.totalCost += parseInt(item.cost);
            return (
                <tr key={itemNum}>
                    <td>{itemNum}</td>
                    <td>{item.title}</td>
                    <td>${item.cost}</td>
                </tr>
            );
        });
    }

    render(){
        const {handlePayment, handle_payNow, handle_Submit, guests, date, time, fullName, branchName, branchAddressNice, branchPhone} = this.props;
        return(
            <MDBContainer>
            <MDBRow>
            <MDBCol>
            <MDBCard style={{ width: "45rem" }}>  
                <MDBCardBody>
                    <MDBCardTitle tag="h2" className="page-heading, font-weight-bold text-center mb-3 p-3">Booking and Order Summary</MDBCardTitle>              
                    <MDBRow>
                        <MDBCol className="text-center">
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
                            <MDBRow>                   
                            <MDBCol className="text-left">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className = 'custome-control-input'
                                            onClick={handle_payNow}
                                        />
                                        <label> Pay Now </label>
                                    </div>
                            </MDBCol>           
                            </MDBRow >
                            
                            
                            <hr/>    
                            <h6>Sapori Unici {branchName}</h6>
                            <span> Address: {branchAddressNice}</span>
                            <br></br>
                            <span> Phone: {branchPhone}</span>
                            
                        </MDBCol>
                    </MDBRow>
                    
                    <MDBCol className="text-center">
                    {this.props.payNow ?
                    <MDBBtn color="indigo" onClick={this.toggle_Modal}>Proceed to Checkout</MDBBtn>
                    :
                    <MDBBtn color="indigo" onClick={handle_Submit}> Confirm Booking Order</MDBBtn>

                    }
                    </MDBCol>             
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </MDBRow>
        <Checkout 
            status = {this.state.modal_status}
            toggle = {this.toggle_Modal}
            handlePayment = {handlePayment}
        />
        </MDBContainer>
        )
    }
}

export default BookingOrderConfirm;
