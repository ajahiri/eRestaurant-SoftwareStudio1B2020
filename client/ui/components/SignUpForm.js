import React from 'react';
import {
    MDBAlert, MDBBtn, MDBCol, MDBIcon, MDBRow
} from 'mdbreact';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import CustomInput2 from "./CustomInput2";

const SignUpForm = ({defaultUser}) => {
    return (
        <Formik
            initialValues={defaultUser}
            validationSchema={Yup.object({
                registerfName: Yup.string()
                    .min(4, "Invalid Full Name")
                    .required("Full name is required."),
                registerPhone: Yup.string()
                    .min(10, "Phone number must be 10 digits.")
                    .max(10, "Phone number must be 10 digits.")
                    .matches("^[0-9]+$", "Invalid phone number.")
                    .required("Phone number is required."),
                registerEmail: Yup.string()
                    .email("Invalid Email address.")
                    .required("Email is required."),
                registerPassword: Yup.string()
                    .min(5, "Password must be at least 5 characters.")
                    .required("Password is required."),
                confirmPassword: Yup.string()
                    .min(5, "Confirm password must be at least 5 characters.")
                    .required("Confirm password is required."),
            })}
            onSubmit={(values,actions) => {
                actions.setStatus(undefined);

                //Do the actual call
                if (values.registerPassword !== values.confirmPassword) {
                    actions.setStatus({apiError: "Password and confirm password must match. Please try again."});
                } else {
                    Accounts.createUser(
                        {
                            email: values.registerEmail,
                            password: values.registerPassword,
                            profile: {
                                phone: values.registerPhone,
                                name: values.registerfName,
                            }
                        }, (error) => {
                            if (error) {
                                actions.setStatus ({ apiError: error.message });
                            } else {
                                actions.setStatus ({ apiSuccess: "Successfully registered " + values.registerfName + "."});
                            }
                        });
                }
            }}
        >
            {props => (
                <Form>
                        <CustomInput2
                            label="Full Name"
                            id="registerfName"
                            name="registerfName"
                            type="text"
                        />
                        <CustomInput2
                            label="Mobile Number"
                            id="registerPhone"
                            name="registerPhone"
                            type="text"
                        />
                        <CustomInput2
                            label="Your Email"
                            id="registerEmail"
                            name="registerEmail"
                            type="text"
                        />
                        <CustomInput2
                            label="Your Password"
                            id="registerPassword"
                            name="registerPassword"
                            type="password"
                        />
                        <CustomInput2
                            label="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                        />
                        <MDBRow>
                            <MDBCol>
                                <div className="text-center">
                                    <MDBBtn type="submit" color="primary">
                                        Sign Up
                                        <MDBIcon far icon="paper-plane" className="ml-1" />
                                    </MDBBtn>
                                </div>
                                {props.status && props.status.apiError ? (
                                    <MDBAlert color="danger" >
                                        Error: {props.status.apiError}
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
}

SignUpForm.defaultProps = {
    defaultUser: {
        registerfName: '',
        registerPhone: '',
        registerEmail: '',
        registerPassword: '',
        confirmPassword: ''
    }
};

SignUpForm.propTypes = {
    defaultUser: PropTypes.object
};

export default SignUpForm;