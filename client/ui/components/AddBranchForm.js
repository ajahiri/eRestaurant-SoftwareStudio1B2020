import {useFormik} from "formik";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import React from "react";

const AddBranchForm = () => {
    // Using Formik to build react forms with ease
    const formik = useFormik({
        initialValues: {
            branchName: '',
            branchManager: '',
            branchPhone: '',
            branchAddress: {
                street: '',
                streetNumber: '',
                postcode: ''

            },
            branchCapacity: ''
        },
        /* Debug
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }, */
        /* Make the Meteor call to add this branch.
           Still Needs:
                -Client form-validation
                -User feedback and error handling.
        */
        onSubmit: values => {
            /* From imports/collections/booking.js */
            Meteor.call('branches.insert', values.branchName, values.branchManager,
                values.branchPhone, values.branchAddress, values.branchCapacity,
                function(error) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Successfully added branch");
                    }
                }
            );
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Add New Branch</h3>
            <MDBRow>
                <MDBCol>
                    <MDBInput value={formik.values.branchName} onChange={formik.handleChange}
                              id="branchName" name="branchName" label="Restaurant Name"
                              validate group error="wrong" success="right"/>
                    <MDBInput value={formik.values.branchManager} onChange={formik.handleChange}
                              id="branchManager" name="branchManager" label="Manager Email" group type="text"
                              validate error="wrong" success="right" />
                    <MDBInput value={formik.values.branchPhone} onChange={formik.handleChange}
                              id="branchPhone" name="branchPhone" label="Phone Number" group
                              validate error="wrong" success="right" type="number" />
                    <MDBInput value={formik.values.branchCapacity} onChange={formik.handleChange}
                              id="branchPhone" name="branchPhone" label="Branch Seating Capacity" group
                              validate error="wrong" success="right" type="number" />
                </MDBCol>
                <MDBCol>
                    <MDBInput value={formik.values.branchAddress.street} onChange={formik.handleChange}
                              id="branchAddress.street" name="branchAddress.street"
                              label="Street Name" group type="text" validate error="wrong" success="right" />
                    <MDBInput value={formik.values.branchAddress.streetNumber} onChange={formik.handleChange}
                              id="branchAddress.streetNumber" name="branchAddress.streetNumber"
                              label="Street Number" group type="text" validate error="wrong" success="right" />
                    <MDBInput value={formik.values.branchAddress.city} onChange={formik.handleChange}
                              id="branchAddress.city" name="branchAddress.city"
                              label="City" group type="text" validate error="wrong" success="right" />
                </MDBCol>
                <MDBCol>
                    <MDBInput value={formik.values.branchAddress.state} onChange={formik.handleChange}
                              id="branchAddress.state" name="branchAddress.state"
                              label="State" group type="text" validate error="wrong" success="right" />
                    <MDBInput value={formik.values.branchAddress.postCode} onChange={formik.handleChange}
                              id="branchAddress.postcode" name="branchAddress.postcode"
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
    );
};


export default AddBranchForm;