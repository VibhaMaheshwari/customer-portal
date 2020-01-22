import React, { Component } from 'react';
import Input from '../common/Input';
import '../styles/ApplyNow.css';
import {isValidText, isValidNumber, isValidEmail, validateFormFields} from '../helpers/ValidationTests'

class ApplyNow extends Component {

    state = {
        username: '',
        email_id: '',
        country: '',
        contact_number: '',
        address: '',
        errorFields: {
            username: '',
            contact_number: '',
            email_id: '',
            country: '',
            address: ''
        },
        isValidForm: '',
        onSubmit:{
            hasSubmitted: false,
            message: '',
            class: ''
        }
    }


    handleInputChange = (event) =>{
        const {name, value} = event.target
        let { errorFields } = this.state;

        switch (name) {
            case 'username': 
              errorFields.username = 
              value.length === 0
              ? 'Username can not be empty.'
              : !isValidText(value) ? 'Username can have alphabets only.' : '';
            break;
            case 'email_id': 
              errorFields.email_id = 
                value.length === 0
                ? 'Email can not be empty.'
                : !isValidEmail(value) ? 'Email is not valid.' : '';
            break;
            case 'contact_number': 
              errorFields.contact_number = 
                value.length === 0
                ? 'Contact number can not be empty.'
                : !isValidNumber(value) ? 'Contact number is not valid.' : '';
            break;
            case 'country': 
              errorFields.country = 
              value.length === 0
              ? 'Country can not be empty.'
              : !isValidText(value) ? 'Country can have alphabets only.' : '';
            break;
            default:
              break;
        }
        this.setState({ 
              [name]: value,
              errorFields
        })     
    }

    isValidForm = () => {
        const { validFields } = this.state
        const isFormValid = Object.keys(validFields).every(function(i){ return validFields[i] === true });
        return isFormValid
    }

    isValidForm = () => {
        const { errorFields, username, email_id, contact_number, country  } = this.state
        let valid = true
        if( !username || !email_id || !contact_number || !country){
            valid = false
        }
        else{
           valid = validateFormFields(errorFields)
        }
        return valid;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, email_id, contact_number, country, address } = this.state
        if(this.isValidForm()){
            console.log("Name entered by the user - ", username)
            console.log("Email Id entered by the user - ", email_id)
            console.log("Phone number entered by the user - ", contact_number)
            console.log("Country entered by the user - ", country)
            console.log("Address entered by the user - ", address)
            this.setState({
                onSubmit:{
                    hasSubmitted: true,
                    class:'form-success',
                    message: 'Thank you for your submission.'}
            })
        } else {
            this.setState({
                onSubmit:{
                    hasSubmitted: true,
                    class:'form-error',
                    message: 'Sorry, we could not process the application at the time.'}
            })
        }
    }

    render() {
        let {username, contact_number, email_id, errorFields, country, address, onSubmit} = this.state
        return (
            <div className="content apply-now">
              {!onSubmit.hasSubmitted ? 
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label={"Your name (required)"}
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleInputChange}
                    />
                    {errorFields.username && <span className="error">{errorFields.username}</span>}

                    <Input 
                        label={"Email Id (required)"}
                        type="text"
                        name="email_id"
                        value={email_id}
                        onChange={this.handleInputChange}
                    />
                    {errorFields.email_id && <span className="error">{errorFields.email_id}</span>}

                    <Input 
                        label={"Country (required)"}
                        type="text"
                        name="country"
                        value={country}
                        onChange={this.handleInputChange}
                    />
                    {errorFields.country && <span className="error">{errorFields.country}</span>}

                    <Input 
                        label={"Contact Number (required)"}
                        type="text"
                        name="contact_number"
                        value={contact_number}
                        onChange={this.handleInputChange}
                    />
                    {errorFields.contact_number && <span className="error">{errorFields.contact_number}</span>}

                    <section className="input-group">
                        <label>Address</label>    
                        <textarea 
                            name="address"
                            value={address}
                            onChange={this.handleInputChange}/>    
                    </section>         

                    <input type="submit" className="submit"/>
                </form> : <div className={onSubmit.class}>{onSubmit.message}</div>}

            </div>
        )
    }
}

export default ApplyNow;
