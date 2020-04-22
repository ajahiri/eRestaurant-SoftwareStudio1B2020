import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead
            ,MDBBtn, MDBIcon, MDBInput} from "mdbreact";

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    addBranchSubmit(event) {
        event.preventDefault();
        console.log("Add Branch Submitted");

        //Build our data from input
        const branchName = this.refs.branchName.value;
        const branchManager = this.refs.branchManager.value;
        const branchPhone = this.refs.branchPhone.value;
        const branchAddress = {
            unitNo: this.refs.branchUnit.value,
            street: this.refs.branchStreetName.value,
            streetNumber: this.refs.branchStreetNumber.value,
            city: this.refs.branchCity.value,
            state: this.refs.branchState.value,
            postCode: this.refs.branchPostcode.value
        }
        console.log(branchName);

        //Meteor.call('branches.insert', branchName, branchManager, branchPhone, branchAddress);
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

                <form onSubmit={this.addBranchSubmit.bind(this)}>
                    <h3>Add New Branch</h3>
                    <MDBRow>
                        <MDBCol>
                            <MDBInput name="branchName" label="Restaurant Name" />
                            <MDBInput ref="branchManager" label="Manager Username" group type="text" validate error="wrong" success="right" />
                            <MDBInput ref="branchPhone" label="Phone Number" validate error="wrong" success="right" type="number" />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput ref="branchUnit" label="Unit Number" group type="text" validate error="wrong" success="right" />
                            <MDBInput ref="branchStreetName" label="Street Name" group type="text" validate error="wrong" success="right" />
                            <MDBInput ref="branchStreetNumber" label="Street Number" group type="text" validate error="wrong" success="right" />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput ref="branchCity" label="City" group type="text" validate error="wrong" success="right" />
                            <MDBInput ref="branchState" label="State" group type="text" validate error="wrong" success="right" />
                            <MDBInput ref="branchPostcode" label="Postcode" group type="number" validate error="wrong" success="right" />
                        </MDBCol>
                    </MDBRow>

                    <div className="text-center">
                        <MDBBtn type="submit" color="primary">
                            Add Branch
                            <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                    </div>
                </form>
            </MDBContainer>
        );
    }
}

export default withTracker(() => {
    return {
    }
})(Admin);