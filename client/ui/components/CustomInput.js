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
    );
};

export default CustomInput;