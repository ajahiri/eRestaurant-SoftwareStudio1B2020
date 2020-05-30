import {Form, Formik} from "formik";
import {
    MDBAlert,
    MDBBtn,
    MDBCol,
    MDBIcon,
    MDBRow,
} from "mdbreact";
import React from "react";
import * as Yup from "yup";
import PropTypes from "prop-types";
import CustomInput from "./CustomInput";

const AddBranchForm = ({defaultBranch}) => {
    return (
        <Formik
            initialValues={defaultBranch}
            validationSchema={Yup.object({
                branchName: Yup.string()
                    .min(5, "Name must be greater than 5 characters.")
                    .required("Branch name is required."),
                branchManager: Yup.string()
                    .email("Invalid Email address.")
                    .required("Branch manager email is required."),
                branchPhone: Yup.string()
                    .min(10, "Phone number must be 10 digits.")
                    .max(10, "Phone number must be 10 digits.")
                    .matches("^[0-9]+$", "Invalid phone number.")
                    .required("Branch phone number is required."),
                branchCapacity: Yup.number()
                    .min(1, "Seating capacity must be greater than 1.")
                    .positive("Seating capacity must be positive.")
                    .integer("Capacity must be an integer.")
                    .required("Seating capacity is required."),
                branchPromo: Yup.string()
                    .url("Promo image link must be a URL.")
                    .required("Promotional image link is required."),
                branchAddress: Yup.object().shape({
                    street: Yup.string().required("Street name is required."),
                    streetNumber: Yup.string().required("Street number is required."),
                    city: Yup.string().required("City is required."),
                    state: Yup.string().required("State is required."),
                    postCode: Yup.number()
                        .min(1000, "Postcode must be 4 digits.")
                        .max(9999, "Postcode can't be more than 4 digits.")
                        .integer("Postcode must be an integer.")
                        .required("Post code is required."),
                })
            })}
            onSubmit={(values,actions) => {
                actions.setStatus(undefined);

                //Do the actual call
                Meteor.call('branches.insert', values.branchName, values.branchManager,
                    values.branchPhone, values.branchAddress, values.branchCapacity, values.branchPromo,
                    function(error) {
                        if (error) {
                            actions.setStatus ({ apiError: error.message });
                        } else {
                            actions.setStatus ({ apiSuccess: "Successfully added branch " + values.branchName + "."});
                        }
                    }
                );
            }}
        >
            { props => (
                <Form>
                    <h3>Add new Branch</h3>
                    <MDBRow>
                        <MDBCol>
                            <CustomInput
                                label="Restaurant Name"
                                id="branchName"
                                name="branchName"
                                type="text"
                            />
                            <CustomInput
                                label="Manager Email"
                                id="branchManager"
                                name="branchManager"
                                type="email"
                            />
                            <CustomInput
                                label="Phone Number"
                                id="branchPhone"
                                name="branchPhone"
                                type="text"
                            />
                            <CustomInput
                                label="Seating Capacity"
                                id="branchCapacity"
                                name="branchCapacity"
                                type="number"
                            />
                            <CustomInput
                                label="Promotional Image Link"
                                id="branchPromo"
                                name="branchPromo"
                                type="text"
                            />
                        </MDBCol>
                        <MDBCol>
                            <CustomInput
                                label="Street Name"
                                id="branchAddress.street"
                                name="branchAddress.street"
                                type="text"
                            />
                            <CustomInput
                                label="Street Number"
                                id="branchAddress.streetNumber"
                                name="branchAddress.streetNumber"
                                type="text"
                            />
                            <CustomInput
                                label="City"
                                id="branchAddress.city"
                                name="branchAddress.city"
                                type="text"
                            />
                        </MDBCol>
                        <MDBCol>
                            <CustomInput
                                label="State"
                                id="branchAddress.state"
                                name="branchAddress.state"
                                type="text"
                            />
                            <CustomInput
                                label="Post Code"
                                id="branchAddress.postCode"
                                name="branchAddress.postCode"
                                type="number"
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <div className="text-center">
                                <MDBBtn type="submit" color="primary">
                                    Add Branch
                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>
                            {props.status && props.status.apiError ? (
                                <MDBAlert color="danger" >
                                    API-Error: {props.status.apiError}
                                </MDBAlert>
                            ) : (
                                <></>
                            )}
                            {props.status && props.status.apiSuccess ? (
                                <MDBAlert color="success" >
                                    {props.status.apiSuccess}
                                </MDBAlert>
                            ) : (
                                <></>
                            )}
                        </MDBCol>
                    </MDBRow>
                </Form>
            )}
        </Formik>
    );
};

AddBranchForm.defaultProps = {
    defaultBranch: {
        branchName: '',
        branchManager: '',
        branchPhone: '',
        branchAddress: {
            street: '',
            streetNumber: '',
            postCode: '',
            city: '',
            state: '',
        },
        branchCapacity: '',
        branchPromo: ''
    }
};

AddBranchForm.propTypes = {
    defaultBranch: PropTypes.object
};


export default AddBranchForm;