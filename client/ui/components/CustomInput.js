import React from "react";
import { useField } from "formik";

import {MDBInput} from "mdbreact";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <React.Fragment>
            <MDBInput label={label} className="custom-input" {...field} {...props}>
                {meta.touched && meta.error ? (
                    <span className="custom-input-error red-text">{meta.error}</span>
                ) : null }
            </MDBInput>
        </React.Fragment>
        /*
        <React.Fragment>
            <label className="grey-text" htmlFor={props.id}>{label}</label>
            <input className="form-control" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </React.Fragment>
        */
    );
};

export default CustomInput;