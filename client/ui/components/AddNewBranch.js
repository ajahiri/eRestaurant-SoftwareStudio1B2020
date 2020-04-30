import {Meteor} from 'meteor/meteor';
import React from "react";
import {withTracker} from 'meteor/react-meteor-data';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import {Branches} from '../../../imports/collections/Branches';
import AddBranchForm from "./AddBranchForm";

class AddNewBranch extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRows() {
        return this.props.branches.map(branch => {
            const ad = branch.address;
            const addressNice = ad.streetNumber + ' ' +
                                ad.street + ', ' + ad.city + ' ' + ad.postcode + ' ' + ad.state;
            return (
                <tr key={branch._id}>
                    <td>{branch._id}</td>
                    <td>{branch.name}</td>
                    <td>{branch.manager}</td>
                    <td>
                        {branch.staff ?
                            <ul className="staffInBranchList">
                                {branch.staff.map(staff => {
                                    return (
                                        <li key={staff.name + staff.role}>{staff.name} | {staff.role}</li>
                                    );
                                })}
                            </ul>
                            :
                            <p>No Staff</p>
                        }
                    </td>
                    <td>{branch.phone}</td>
                    <td>{addressNice}</td>
                </tr>
            );
        });
    };

    /*
    * Note: Need to work on getting list of staff belonging to every branch.
    * */
    render() {
        return (
            <>
                <MDBRow>
                    <MDBCol>
                        <h2>Branch Management</h2>
                        <h3>Current Branches</h3>
                        <MDBTable responsive striped>
                            <MDBTableHead color="primary-color" textWhite>
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
                                {this.renderRows()}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
                <AddBranchForm/>
            </>
        );
    }
};


export default withTracker(() => {
    //Taken from https://guide.meteor.com/react.html#data
    Meteor.subscribe('branches');
    return {
        branches: Branches.find().fetch(),
    }
})(AddNewBranch);

