import React, { Component } from 'react';
import '../styles/ContactUs.css';
import Input from '../common/Input';
import Modal from '../common/Modal';
import {isValidText, isValidNumber, isValidEmail, validateFormFields} from '../helpers/ValidationTests'

class ContactUs extends Component {

    state = {
        username: '',
        contact_number: '',
        email_id: '',
        errorFields: {
            username: '',
            contact_number: '',
            email_id: ''
        },
        isFormValid: true,
        showModal: false
    }

    handleInputChange = event =>{
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
            default:
              break;
        }
        this.setState({ 
              [name]: value,
              errorFields
        })  
    }

    isValidForm = () => {
        const { errorFields, username, email_id, contact_number  } = this.state
        let valid = true
        if( !username || !email_id || !contact_number){
            valid = false
        }
        else{
           valid = validateFormFields(errorFields)
        }
        return valid;
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, email_id, contact_number } = this.state
        if(this.isValidForm()){
            console.log("Name entered by the user - ", username)
            console.log("Email Id entered by the user - ", email_id)
            console.log("Phone number entered by the user - ", contact_number)
            this.setState({ showModal: true })
        } else {
            this.setState({ isFormValid : false})
        }
    
    }

    render() {
        let {username, contact_number, email_id, errorFields, isFormValid, showModal} = this.state
        const contact_detail_labels = ['Phone Number', 'Address', 'Email Id']
        const contact_detail_values = ['+1 437 344 9414', '1, CA Towers, Toronto', 'contact_us@info.com']
      
        let contact_details_section = contact_detail_labels.map((contactLabel, i) => {
            return <div key = {i}><span className="bold">{contactLabel} :</span> <p>{contact_detail_values[i]}</p></div>
        })

        return (
            <div className="content">
                <h1>CONTACT US</h1>
                <section className="contact-us-page">
                    <div className="contact-details">
                        {contact_details_section}
                    </div>
                    <div className="form-details">
                    <p>Need more information ? Write to us and some one from our team will reach to you shortly.</p>
                {isFormValid ? 
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
                        label={"Contact Number (required)"}
                        type="text"
                        name="contact_number"
                        value={contact_number}
                        onChange={this.handleInputChange}
                    />
                    {errorFields.contact_number && <span className="error">{errorFields.contact_number}</span>}

                    <Input 
                        label={"Email Id (required)"}
                        type="text"
                        name="email_id"
                        value={email_id}
                        onChange={this.handleInputChange}
                    />
                    {errorFields.email_id && <span className="error">{errorFields.email_id}</span>}

                    <input type="submit" className="submit"/>

                    {showModal && 
                    <Modal 
                        content={"Thank you for your submission, someone will be in touch with you shortly."}
                        closeModal={this.closeModal}
                    />}
                    </form> : 
                    <div className ="error">Sorry, we could not process the application at this time.</div>}
                </div>
            </section>
        </div>
        )
    }
}

export default ContactUs;
