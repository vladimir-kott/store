import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {

    const defoultClassNameInput = "w-4 h-4 text-blue-500 bg-gray-100  " +
     "dark:bg-gray-700 dark:border-gray-600 "

    const handleChange = () => {
        onChange({ name: name, value: !value });
    };
    const getInputClasses = () => {
        return defoultClassNameInput  /*(error ? " is-invalid" : "");*/
    };

    return ( 
        <div className="">
            <div className="flex items-center">
                <input
                    className={getInputClasses()}
                    type="checkbox"
                    value=""
                    id={name}
                    onChange={handleChange}
                    checked={value}
                />
                <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300" htmlFor={name}>
                    {children}
                </label>
            </div>
            {error && <div className="text-xs text-red-600 pl-2">{error}</div>}
        </div>
    );
}

CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
};
 
export default CheckBoxField;