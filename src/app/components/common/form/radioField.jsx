import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, name, onChange, value, label }) => {

    const defoultClassNameInput = "form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-gray-50 " +
    "checked:bg-blue-500 checked:border-blue-200 focus:outline-none transition duration-200 "+
    "mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return ( 
        <div className="">
            <label className="block mb-1 text-base pl-2 font-medium text-gray-900 dark:text-gray-300">
                {label}
            </label>
            <div className="flex">
                {options.map((option) => (
                    <div
                        key={option.name + "_" + option.value}
                        className="mr-2"
                    >
                        <input
                            className={defoultClassNameInput} 
                            type="radio"
                            name={name}
                            id={option.name + "_" + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={handleChange}
                        />
                        <label
                            className=""
                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default RadioField;

