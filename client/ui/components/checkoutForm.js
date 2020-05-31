import {MDBAlert, MDBBtn, MDBCol, MDBIcon, MDBModalBody, MDBRow} from "mdbreact";
import React from "react";
import * as Yup from "yup";
import PropTypes from "prop-types";
import {Form, Formik} from "formik";
import CustomInput from "./CustomInput";

const CheckOutForm = ({defaultCard}) => {
    return (
        <>
            <Formik
                initialValues={defaultCard}
                validationSchema={Yup.object({
                    cardName: Yup.string()
                        .min(5, "Name must be greater than 5 characters.")
                        .required("Card name is required."),
                    cardNumber: Yup.string()
                        .min(16, "Card number must be 16 digits.")
                        .max(16, "Card number must be 16 digits.")
                        .matches("^[0-9]+$", "Invalid card number.")
                        .required("Card number is required."),
                    expYear: Yup.number()
                        .min(2020, "Invalid card year.")
                        .max(2100, "Invalid card year.")
                        .required("Card expiry year is required."),
                    expMonth: Yup.number()
                        .min(1, "Invalid card month.")
                        .max(12, "Invalid card month.")
                        .positive("Invalid card month.")
                        .integer("Invalid card month.")
                        .required("Card expiry month is required."),
                    cardCode: Yup.string()
                        .min(3, "Card security code must be 3 digits.")
                        .max(3, "Card number must be 3 digits.")
                        .matches("^[0-9]+$", "Invalid security number.")
                        .required("Card security number is required."),
                })}
                onSubmit={(values,actions) => {

                }}
            >
                { props => (
                    <Form>
                    <MDBRow center>
                        <MDBCol sm="8">
                            <CustomInput
                                label="Full Name on Card"
                                id="cardName"
                                name="cardName"
                                type="text"
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol sm="8">
                            <CustomInput
                                label="Card Number"
                                id="cardNumber"
                                name="cardNumber"
                                type="text"
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol sm="4" md="4" lg="4">
                            <CustomInput
                                label="Expiration Month"
                                id="expMonth"
                                name="expMonth"
                                type="number"
                            />
                            <CustomInput
                                label="Expiration Year"
                                id="expYear"
                                name="expYear"
                                type="number"
                            />
                            <CustomInput
                                label="Security Code"
                                id="cardCode"
                                name="cardCode"
                                type="text"
                            />
                        </MDBCol>
                    </MDBRow>
                    </Form>
                )}
            </Formik>
        </>
    );
}

CheckOutForm.defaultProps = {
    defaultCard: {
        cardName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cardCode: '',
    }
};

CheckOutForm.propTypes = {
    defaultCard: PropTypes.object
};


export default CheckOutForm;