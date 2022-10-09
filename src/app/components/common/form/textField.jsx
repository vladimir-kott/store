import React, {useState} from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const TextField = ({label, type, customType, name, value, onChange, placeholder, error, onSearch}) => {
    const defoultClassNameInput = "bg-gray-50 border-2 border-gray-200 text-gray-900 " +
     "focus:outline-none text-sm block w-full p-2 " + /*focus:ring-1 focus:ring-blue-500*/
     "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " +
     "dark:focus:ring-blue-500 dark:focus:border-blue-500 "

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return defoultClassNameInput + (error ? " focus:border-red-500 " : " focus:border-blue-500 ") 
        + (customType!=="search" && type==="text" ? "rounded-lg " : "rounded-l-lg ");
    };

    return ( 
        <div className="">
            <label 
                className="block mb-1 text-base pl-2 font-medium text-gray-900 dark:text-gray-300"
                htmlFor={name}>{label}
            </label>
            <div className="flex">
            <input 
                type={showPassword ? "text" : type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={getInputClasses()}
            />
             {type === "password" && (
                    <button
                        className="w-10 bg-blue-300 rounded-r-lg hover:bg-blue-500"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                    {showPassword ? (<FontAwesomeIcon icon={faEyeSlash}/>) : (<FontAwesomeIcon icon={faEye}/>)}
                    </button>
            )}
            {customType === "search" && (
                    <button
                        className="w-10 bg-blue-300 rounded-r-lg hover:bg-blue-500"
                        type="button"
                        onClick={onSearch}
                    >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
            )}
            </div>
            {error && <div className="text-xs text-red-600 pl-2">{error}</div>}
        </div>
    );
}
TextField.defaultProps = {
    type: "text",
    customType: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
 
export default TextField;