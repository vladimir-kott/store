import React, {useState} from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const TextField = ({label, type, customType, name, value, onChange, placeholder, error}) => {
    const defoultClassNameInput = "bg-gray-50 border border-gray-300 text-gray-900 " +
     "text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
     "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " +
     "dark:focus:ring-blue-500 dark:focus:border-blue-500 "

     const [showPassword, setShowPassword] = useState(false);

     const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    console.log('customType', customType)

    return ( 
        <div className="">
            <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                className={defoultClassNameInput + (customType!=="search" && type==="text" ? "rounded-lg " : "rounded-l-lg ")}
            />
             {type === "password" && (
                    <button
                        className="5 bg-blue-300 rounded-r-lg "
                        type="button"
                        onClick={toggleShowPassword}
                    >
                    {showPassword ? (<FontAwesomeIcon icon={faEyeSlash}/>) : (<FontAwesomeIcon icon={faEye}/>)}
                    </button>
            )}
            {customType === "search" && (
                    <button
                        className="5 bg-blue-300 rounded-r-lg "
                        type="button"
                        /*onClick={toggleShowPassword}*/
                    >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
            )}
            </div>
            {error && <div className="">{error}</div>}
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