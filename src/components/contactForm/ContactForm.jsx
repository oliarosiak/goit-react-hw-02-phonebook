import React, { Component } from "react";
import { GiWhiteBook } from "react-icons/gi";
import css from './ContactForm.module.css';

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
            <form onSubmit={this.handleOnSubmitForm} className={css.form} >
                <label className={css.label} >
                    Muggle Name
                    <input type="text" name="name" className={css.input}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        value={name} onChange={this.handleOnChange} required />
                </label>
                <label className={css.label} >
                    Not a Magic Number
                    <input type="tel" name="number" className={css.input}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. At least 5 symbols"
                        value={number} onChange={this.handleOnChange} required />
                </label>
                <button type="submit" className={css.btn} ><GiWhiteBook/> Lumos Contact!</button>
            </form>
        )
    }
}

export default ContactForm;