import React, { Component } from "react";
import { nanoid } from 'nanoid';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

class App extends Component{
  state = {
    contacts: [],
    filter: '',    
  } 
  
  handleUpdateContacts = ({name, number}) => {
    
    const newUser = {
      id: nanoid(),
      name,
      number
    };

    this.setState({ contacts: [...this.state.contacts, newUser] });    
  }
  
  render() {
    const { contacts } = this.state;

    return (
      <div>        
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleUpdateContacts} />       
        <h2>Contacts</h2>       
        {/* <Filter /> */}
        <ContactList contactsNames={contacts} />        
      </div>
    )
  }  
}

export default App;
