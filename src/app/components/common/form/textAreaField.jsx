import React from "react";
import PropTypes  from "prop-types";


const TextAreaField = ({ label, name, value, placeholder, onChange, error }) => {

    const defoultClassNameInput = "bg-gray-50 border-2 border-gray-200 text-gray-900 " +
     "focus:outline-none text-sm block w-full p-2 rounded-lg " + /*focus:ring-1 focus:ring-blue-500*/
     "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " +
     "dark:focus:ring-blue-500 dark:focus:border-blue-500 "

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return defoultClassNameInput + (error ? " focus:border-red-500 " : " focus:border-blue-500 ");
    };

    return ( 
        <div className="">
            <label 
                className="block mb-1 text-base pl-2 font-medium text-gray-900 dark:text-gray-300"
                htmlFor={name}>{label}
            </label>
            <div className="flex">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
            </div>
            {error && <div className="text-xs text-red-600 pl-2 ">{error}</div>}
        </div>
    );
}
TextAreaField.defaultProps = {
    type: "text"
};
TextAreaField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
 
export default TextAreaField;