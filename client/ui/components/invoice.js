import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon, MDBTable, MDBTableBody, MDBTableHead} from  "mdbreact";

class Invoice extends React.Component{
    constructor(props) {
        super(props);

        this.totalCost;
    }

    invoiceID() {
      //generates random id;
    let guid = () => {
      let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    return guid();
    //"c2181edf-041b-0a61-3651-79d671fa3db7"
    }

    renderRows() {
      return this.props.Cart.map(item => {
          return (
              <tr key={item.item_id}>
                  <td>{item.quantity}</td>
                  <td>{item.title}</td>
                  <td>${item.cost}</td>
                  <td>${(parseFloat(item.cost) * parseInt(item.quantity)).toFixed(2)}</td>
              </tr>
          );
      });
  }

    render(){
      const {bookingID, guests, date, time, fullName, branchName, branchAddressNice, branchPhone} = this.props;
      let totalCost = 0.0;
      this.props.Cart.forEach(item => {
          totalCost += (parseFloat(item.cost) * parseInt(item.quantity));
      })
        return(
          <MDBContainer>
          <MDBRow>
          <MDBCol>
          <MDBCard className="mx-auto" style={{ width: "45rem" }}>
            <MDBCardBody>
              <MDBCardTitle tag="h2" className="page-heading, font-weight-bold text-center mb-3 p-3">Invoice</MDBCardTitle>              
              <MDBRow center>
                  <h5 className=" mb-4 p-0">Invoice#: {this.invoiceID()}</h5>
                  <h5 className=" mb-4 p-0">Booking#: {bookingID}</h5>
              </MDBRow>
              <MDBRow>
                        <MDBCol>

                          <MDBRow className="text-left">
                            <MDBCol>
                              <h6 className=" mb-4 p-0">From:</h6>
                              <h6 className="font-weight-bold mb-4 p-0">Sapori Unici {branchName}</h6>
                              <h6 className="mb-4 p-0">Address: {branchAddressNice}</h6>
                              <h6 className="mb-4 p-0">Phone: {branchPhone}</h6>
                              <h6 className=" mb-4 p-0"><strong>Invoice date: </strong> {new Date().toDateString()}</h6>

                            </MDBCol>
                            <MDBCol className="text-right">
                                <h6 className="mb-4 p-0">To: {fullName}</h6>
                                {/* <h6 className="mb-4 p-0">{fullName}</h6> */}
                            </MDBCol>
                          
                            
                          </MDBRow>

                          <h6 className="font-weight-bold mb-4 p-0">Table for {guests} on {date} at {time}</h6>
                         
                          <MDBTable borderless>
                                <MDBTableHead>
                                    <tr>
                                        <td>Qty.</td>
                                        <td>Item</td>
                                        <td>Price</td>
                                        <td>Sub-total</td>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {this.renderRows()}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total: ${totalCost.toFixed(2)}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                        </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        </MDBContainer>

        )
    }
}

export default Invoice;



