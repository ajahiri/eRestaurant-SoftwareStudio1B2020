import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead
            ,MDBBtn, MDBIcon, MDBInput} from "mdbreact";

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <h2>Branch Management</h2>
                        <h3>Current Branches</h3>
                        <MDBTable>
                            <MDBTableHead>
                                <tr>
                                    <th>#id</th>
                                    <th>Name</th>
                                    <th>Manager</th>
                                    <th>Staff</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <h3>Add New Branch</h3>
                        <form>
                            <div className="grey-text">
                                <MDBInput label="Restaurant Name" group type="text" validate error="wrong"
                                          success="right" />
                                <MDBInput label="Manager ID" group type="email" validate error="wrong"
                                          success="right" />
                                <MDBInput label="Phone" group type="text" validate error="wrong" success="right" />
                                <MDBInput type="textarea" rows="2" label="Your message" />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">
                                    Add Branch
                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default withTracker(() => {
    return {
    }
})(Admin);