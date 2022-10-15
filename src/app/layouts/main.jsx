import {React, useState} from "react";
import RadioField from "../components/common/form/radioField";
import SelectFiel from "../components/common/form/selectField";
import TextAreaField from "../components/common/form/textAreaField";
import TextField from "../components/common/form/textField";
import CheckBoxField from "../components/common/form/checkBoxField"
import { validator } from "../utils/validator";
import PrimaryButton from "../components/common/form/primaryButton";
import SecondaryButton from "../components/common/form/seconaryButton";


const Main = () => {
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

    const handleClick = (target) => {
        console.log('click ', target)
        setLoading(prevState => !prevState)
    }

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
          label = "Search field"
          type = "text"
          customType="search"
          name = "search_field"
          value = {data.search_field}
          placeholder = "введіть ваші данні"
          onChange={handleChange}
          error={errors.search_field}
        />
        <TextField 
          label = "Custom text field"
          type = "text"
          customType="any"
          name = "custom_field"
          value = {data.custom_field}
          placeholder = "введіть ваші данні"
          onChange={handleChange}
          error={errors.custom_field}
        />
        <TextAreaField
          label="Text arae"
          name="text_area"
          value={data.text_area}
          placeholder="плейсхолдер для текст ериа"
          onChange={handleChange}
          error={errors.text_area}
        />
        <SelectFiel
            label="Select field"
            name="select_field"
            value={data.select_field} 
            onChange={handleChange}
            defaultOption="def option"
            options={options}
            error={errors.select_field}
        />
        <RadioField
            label="Radio field"
            options={[
                { name: "One", value: "1" },
                { name: "Two", value: "2" },
                { name: "Three", value: "3" }
            ]}
            name="radio_field"
            onChange={handleChange}
            value={data.radio_field}
        />
        <CheckBoxField
            name="chack_field"
            value={data.chack_field}
            onChange={handleChange}
            error={errors.chack_field}
        >
            Подтвердить <a>лицензионное соглашение</a>
        </CheckBoxField>
        <PrimaryButton
            name="primary_button"
            label="Отправить"
            loading={loading}
            onClick={handleClick}
        />
        <SecondaryButton
            name="secondary_button"
            label="Отправить"
            loading={loading}
            onClick={handleClick}
        />
      </header>
    
    );
}
 
export default Main;

