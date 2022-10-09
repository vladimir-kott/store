import React from "react";
import PropTypes from "prop-types";

const SelectField = ({label, name ,value , onChange, defaultOption, options, error}) => {

    const defoultClassNameInput = "bg-gray-50 border-2 border-gray-200 text-gray-900 " +
     "rounded-lg focus:outline-none text-sm block w-full p-2 " + /*focus:ring-1 focus:ring-blue-500*/
     "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " +
     "dark:focus:ring-blue-500 dark:focus:border-blue-500 "

     const handleChange = ({ target }) => {
        console.log(target.name)
        onChange({ name: target.name, value: target.value });
    };

     const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  value: options[optionName].value
              }))
            : options;      
       

     const getInputClasses = () => {
        return defoultClassNameInput + (error ? " focus:border-red-500 " : " focus:border-blue-500 ");
    };

    return ( 
        <div className="">
            <label 
                className="block mb-1 text-base pl-2 font-medium text-gray-900 dark:text-gray-300"
                htmlFor={name}>{label}
            </label>
            <select
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                {<option disabled value="">
                    {defaultOption}
                </option>}
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="text-xs text-red-600 pl-2">{error}</div>}
        </div>
    );
}

SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string
};
 
export default SelectField;