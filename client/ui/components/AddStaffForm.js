import React from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {MDBBtn, MDBInput, MDBIcon, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";
import {useFormik} from "formik";

const AddStaffForm = () => {
    const formik = useFormik({
        initialValues: {
            staffEmail: '',
            staffType: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <MDBInput
                    label="Staff User Email"
                    onChange={formik.handleChange}
                    id="staffEmail"
                    name="staffEmail"
                />
                <MDBSelect type="">
                    <MDBSelectInput type="" selected="Choose your option"/>
                    <MDBSelectOptions type="">
                        <MDBSelectOption type="" disabled>Choose your option</MDBSelectOption>
                        <MDBSelectOption type="" value="manager">Manager</MDBSelectOption>
                        <MDBSelectOption type="" value="chef">Chef</MDBSelectOption>
                        <MDBSelectOption type="" value="waiter">Waiter</MDBSelectOption>
                        <MDBSelectOption type="" value="bartender">Bartender</MDBSelectOption>
                        <MDBSelectOption type="" value="other">Other</MDBSelectOption>
                    </MDBSelectOptions>
                </MDBSelect>
                <div className="text-center">
                    <MDBBtn color="primary">
                        Add Branch
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                </div>
            </form>
        </div>
    );
}

export default withTracker(() => {
    //Taken from https://guide.meteor.com/react.html#data
    //Meteor.subscribe('branches');
    return {
    }
})(AddStaffForm);