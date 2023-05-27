import React, { Component } from "react";

const INITIAL_STATE = {
    name: '',
    number: '',
};

class ContactForm extends Component{
    state = {
        ...INITIAL_STATE
    };

    handleOnChange = event => {    
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleOnSubmitForm = event => {
        event.preventDefault();
        this.props.onSubmit({ ...this.state });
        this.reset();
    }

    reset = () => {        
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        const { name, number } = this.state;       

        return (
            <form onSubmit={this.handleOnSubmitForm} >
                <label>
                    <input type="text" name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        value={name} onChange={this.handleOnChange} required />
                </label>
                <label>
                    <input type="tel" name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number} onChange={this.handleOnChange} required />
                </label>
                <button type="submit">Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;