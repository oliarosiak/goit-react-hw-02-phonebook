import React, { Component } from "react";

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

class App extends Component{
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#010101'
        }}
      >
        
        <h1>Phonebook</h1>
        <ContactForm />
        {/* <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /> */}

        <h2>Contacts</h2>       
      {/* <Filter /> */}
       <ContactList name='Nika' number='124563221588'/>
        
      </div>
    )
  }  
}

export default App;

