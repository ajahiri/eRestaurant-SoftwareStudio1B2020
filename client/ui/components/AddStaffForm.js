import React from 'react';
import {withTracker} from "meteor/react-meteor-data";

import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {MDBBtn, MDBIcon} from "mdbreact";
import CustomInput from "./CustomInput";
import CustomDropdown from "./CustomDropdown";

import {  MDBAlert } from 'mdbreact';

const AddStaffForm = ({staffUser}) => {
    return(
        <Formik
            initialValues={staffUser}
            validationSchema={Yup.object({
                staffEmail: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                branchID: Yup.string()
                    .min(17, "IDs must be 17 characters")
                    .required("Branch ID is required"),
                staffRole: Yup.object().shape({
                    value:  Yup.string().required("Staff role is required")
                })
            })}
            onSubmit={(values, actions) => {
                actions.setStatus(undefined);

                //Add Staff and role to Branch
                Meteor.call('branches.addStaff', values.staffEmail, values.branchID, values.staffRole.value,
                    function(error) {
                        if (error) {
                            console.log(error);
                            actions.setStatus ({ apiError: error.message });
                        } else {
                            actions.setStatus ({ apiSuccess: "Successfully added staff member " +values.staffEmail });
                        }
                    }
                );
            }}

        >
            { props => (
                <Form>
                    <CustomInput
                        label="Staff User Email"
                        id="staffEmail"
                        name="staffEmail"
                        type="email"
                    />
                    <CustomInput
                        label="Branch ID (See Below)"
                        id="branchID"
                        name="branchID"
                        type="text"
                    />
                    <CustomDropdown
                        label="Staff Role"
                        id="staffRole"
                        name="staffRole"
                        type="text"
                        options={[
                            { value: "manager", label: "Manager" },
                            { value: "waiter", label: "Waiter" },
                            { value: "bartender", label: "Bartender" },
                            { value: "chef", label: "Chef" },
                            { value: "cook", label: "Line Cook" },
                            { value: "other", label: "Other" }
                        ]}
                    />
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
                            Successfully added staff member!
                        </MDBAlert>
                    ) : (
                        <></>
                    )}
                </Form>
            )}
        </Formik>
    );
}

AddStaffForm.defaultProps = {
    staffUser: {
        staffEmail: '',
        branchID: '',
        staffRole: { value: '', label: '' }
    }
};

AddStaffForm.propTypes = {
    staffUser: PropTypes.object
};

export default withTracker(() => {
    //Taken from https://guide.meteor.com/react.html#data
    //Meteor.subscribe('branches');
    return {
    }
})(AddStaffForm);