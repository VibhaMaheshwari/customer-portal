import React from 'react';
import '../styles/Input.css';
import {func, string } from 'prop-types'

const Input = ({label, type, name, value, onChange}) => {
    return (
        <section className="input-group">
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange}/>
        </section>
    )
}

Input.prototype = {
    label: string, 
    type: string, 
    name: string, 
    value: string, 
    onChange: func.isRequired
}

Input.defaultProps = {
    label: 'string', 
    type: 'test', 
    name: '', 
    value: '',
}

export default Input;
