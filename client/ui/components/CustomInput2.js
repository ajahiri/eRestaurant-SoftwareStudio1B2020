import React from "react";
import { useField } from "formik";

import {MDBInput} from "mdbreact";

const CustomInput2 = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <React.Fragment>
            <label htmlFor={props.id} className="grey-text">
                {label}
            </label>
            <input className="custom-input form-control" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <span className="custom-input-error red-text">{meta.error}</span>
            ) : null }
            <br/>
        </React.Fragment>
    );
};

export default CustomInput2;