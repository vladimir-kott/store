import {React, useState} from "react";
import TextField from "../components/common/form/textField";
import { validator } from "../utils/validator";

const Main = () => {
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);

    const [data, setData] = useState({
        text_field: "",
        password_field: "",
        search_field: "",
        custom_field: "",
    });
    
    const handleChange = (target) => {
      setData((prevState) => ({
          ...prevState,
          [target.name]: target.value
      }));
      setEnterError(null);
      validate(target.name)
      console.log(target.name)
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
        }
    };

    const validate = (focusField) => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    return (  
        <div className="App">
      <header className="w-full h-full">
        <TextField 
          label = "Text field"
          type = "text"
          name = "text_field"
          value = {data.text_field}
          placeholder = "Enter text info"
          onChange={handleChange}
          error={errors.text_field}
        />
        <TextField 
          label = "Password field"
          type = "password"
          name = "password_field"
          value = {data.password_field}
          placeholder = "введіть ваші данні"
          onChange={handleChange}
          error={errors.password_field}
        />
        <TextField 
          label = "Тестовий лейбл"
          type = "text"
          customType="search"
          name = "search_field"
          value = {data.search_field}
          placeholder = "введіть ваші данні"
          onChange={handleChange}
          error={errors.search_field}
        />
        <TextField 
          label = "Тестовий лейбл"
          type = "text"
          customType="any"
          name = "custom_field"
          value = {data.custom_field}
          placeholder = "введіть ваші данні"
          onChange={handleChange}
          error={errors.custom_field}
        />
        <button type="submit">chack</button>
      </header>
    </div>
    );
}
 
export default Main;

