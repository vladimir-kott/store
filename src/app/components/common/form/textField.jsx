import React from "react";
import PropTypes from "prop-types";

const TextField = ({label, type, name, value, onChange, placeholder, error}) => {
    const defoultClassName = "border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" 
    return ( 
        <div className="">
            <label htmlFor={name}>{label}</label>
            <input 
            type={"text"}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={defoultClassName}
            />
            {error && <div className="">{error}</div>}
        </div>
    );
}
TextField.defaultProps = {
    type: "text"
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