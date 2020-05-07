import React from "react";
import Select from "react-select";
import {useField, useFormikContext} from "formik";


const CustomDropdown = ({ options, label, ...props }) => {
    const { setFieldValue, setFieldTouched } = useFormikContext();
    const [field, meta] = useField(props);

    /**
     * Will manually set the value belong to the name props in the Formik form using setField
     */
    function handleOptionChange(selection) {
        setFieldValue(props.name, selection);
    }

    /**
     * Manually updated the touched property for the field in Formik
     */
    function updateBlur() {
        setFieldTouched(props.name, true);
    }

    return (
        <React.Fragment>
            <label htmlFor={props.id}>{label}</label>
            <Select
                options={options}
                {...field}
                {...props}
                onBlur={updateBlur}
                onChange={handleOptionChange}
            />
            {meta.touched && meta.error ? (
                <span className="red-text custom-input-error">{meta.error.value}</span>
            ) : null}
        </React.Fragment>
    );
};

export default CustomDropdown;