import React, {useState} from "react";
import PropTypes from "prop-types";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";

const NavBar = () => {

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)
    const [enterError, setEnterError] = useState(null);

    const [data, setData] = useState({
        text_field: "",
        password_field: "",
        search_field: "",
        custom_field: "",
        text_area: "",
        select_field: "",
        radio_field: "",
        chack_field: false,
    });

    const options = {
        first:{
            name:"label 1",
            value:"f123"
        },
        second:{
            name:"label 2",
            value:"f234"
        },
        third:{
            name:"label 3",
            value:"f345"
        },
    };
    
    const handleChange = (target) => {
      setData((prevState) => ({
          ...prevState,
          [target.name]: target.value
      }));
      setEnterError(null);
      validate(target.name)
    };

    const validatorConfig = {
        text_field: {
            isRequired: {
                message: "text_field requered"
            }
        },
        password_field: {
            isRequired: {
                message: "password_field requered"
            }
        },
        search_field: {
            isRequired: {
                message: "search_field requered"
            }
        },
        custom_field: {
            isRequired: {
                message: "custom_field requered"
            }
        },
        text_area: {
            isRequired: {
                message: " text_area requered"
            }
        },
        select_field: {
            isRequired: {
                message: "select_field requered"
            }
        },
        chack_field: {
            isRequired: {
                message: "chack_field requered"
            }
        }
    };

    const validate = (focusField) => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    return ( 
        <nav className="bg-red-500">
            <div className="container mx-auto">
                <div className="flex justify-between py-2.5">
                    <div>
                        <a href="https://#" class="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                    </div>
                    <div className="w-[350px]">
                        <TextField 
                            label = "Search field"
                            showLabel={false}
                            type = "text"
                            customType="search"
                            name = "search_field"
                            value = {data.search_field}
                            placeholder = "введіть ваші данні"
                            onChange={handleChange}
                            error={errors.search_field}
                        />
                    </div>
                    <div>
                        <div className="flex">
                            <a href="https://#" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            </a>
                            <a href="https://#" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            </a>
                            <a href="https://#" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;