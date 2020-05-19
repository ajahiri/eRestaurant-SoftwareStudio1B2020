import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBView, MDBMask, MDBIcon, MDBTable, MDBTableBody, MDBTableHead} from  "mdbreact";
import ic_print from "./ic_print_24px.png"

class Invoice extends React.Component{
    constructor(props) {
        super(props);
    
    }

    render(){
        return(
          <MDBCol>
          <MDBCard style={{ width: "45rem" }}>  
            <MDBCardBody>
              <MDBCardTitle tag="h2" className="page-heading, font-weight-bold text-center mb-3 p-3">Invoice</MDBCardTitle>              
              <MDBRow>
                        <MDBCol>

                          <MDBRow className="text-left">
                            <MDBCol>
                              <h6 className=" mb-4 p-0">From:</h6>
                              <h6 className="font-weight-bold mb-4 p-0">Sapori Unici Ashfield</h6>
                              <h6 className="mb-4 p-0">Grimmond Ave, Ashfield NSW 2131</h6>
                              <h6 className=" mb-4 p-0"><strong>Invoice date: </strong> May 15, 2020</h6>

                            </MDBCol>
                            <MDBCol className="text-right">
                              <h6 className=" mb-4 p-0">Invoice #123</h6>
                                <h6 className="mb-4 p-0">To:</h6>
                                <h6 className="mb-4 p-0">First Name Last Name</h6>
                                <h6 className=" mb-4 p-0">firstname@gmail.com</h6>
                            </MDBCol>
                          
                            
                          </MDBRow>
                         
                          <MDBTable>
                                  <MDBTableHead>
                                    <tr>
                                      <th>Item list</th>
                                      <th>Quantity</th>
                                      <th>Unit Price</th>
                                      <th>Total Price</th>
                                    </tr>
                                  </MDBTableHead>  
                                  <MDBTableBody>
                                  <tr>
                                      <td>Spagetti Napolitan</td>
                                      <td>1</td>
                                      <td>$18.99</td>
                                      <td>$18.99</td>
                                  </tr>
                                  <tr>
                                      <td>Lemon Lime Bitter</td>
                                      <td>2</td>
                                      <td> $7.55</td>
                                      <td>$15.10</td>
                                  </tr>
                                  <tr>
                                      <td>Spagetti Marinarar</td>
                                      <td>1</td>
                                      <td>$22.99</td>
                                      <td>$22.99</td>
                                  </tr>
                                  </MDBTableBody>
                              </MDBTable>
                        
                            <h5 className="font-weight-bold mb-4 p-0 text-right">Total: $57.08</h5>
                         
                          
                        </MDBCol>
                        
              </MDBRow>
              <MDBBtn href="#"> <img src={ic_print}></img>Print</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        )
    }
}


export default Invoice;


