import React from "react";
import {withTracker} from 'meteor/react-meteor-data';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead
    ,MDBBtn, MDBIcon, MDBInput} from "mdbreact";

class AddNewBranch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            branchName:'',
            branchManager: '',
            branchPhone: '',
            branchAddress: {
                unitNo: '',
                street: '',
                streetNumber: '',
                city: '',
                state: '',
                postCode: ''
            }
        }

        this.addBranchSubmit = this.addBranchSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({

        });
    }

    addBranchSubmit(event) {
        event.preventDefault();
        console.log("Add Branch Submitted");
        console.log(this.state);

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

                <form onSubmit={this.addBranchSubmit}>
                    <h3>Add New Branch</h3>
                    <MDBRow>
                        <MDBCol>
                            <MDBInput value={this.state.branchName} onChange={this.handleInputChange}
                                      name="branchName" label="Restaurant Name" />
                            <MDBInput value={this.state.branchManager} onChange={this.handleInputChange}
                                      name="branchManager" label="Manager Username" group type="text" validate error="wrong" success="right" />
                            <MDBInput value={this.state.branchPhone} onChange={this.handleInputChange}
                                      name="branchPhone" label="Phone Number" validate error="wrong" success="right" type="number" />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput value={this.state.branchAddress.unitNo} onChange={this.handleInputChange}
                                      label="Unit Number" group type="text" validate error="wrong" success="right" />
                            <MDBInput value={this.state.branchAddress.street} onChange={this.handleInputChange}
                                      label="Street Name" group type="text" validate error="wrong" success="right" />
                            <MDBInput value={this.state.branchAddress.streetNumber} onChange={this.handleInputChange}
                                      label="Street Number" group type="text" validate error="wrong" success="right" />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput value={this.state.branchAddress.city} onChange={this.handleInputChange}
                                      label="City" group type="text" validate error="wrong" success="right" />
                            <MDBInput value={this.state.branchAddress.state} onChange={this.handleInputChange}
                                      label="State" group type="text" validate error="wrong" success="right" />
                            <MDBInput value={this.state.branchAddress.postCode} onChange={this.handleInputChange}
                                      label="Postcode" group type="number" validate error="wrong" success="right" />
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
})(AddNewBranch);

