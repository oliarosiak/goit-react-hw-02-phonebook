import React, { Component } from "react";
import { nanoid } from 'nanoid';

import ContactForm from './contactForm/ContactForm';
// import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const INITIAL_STATE = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
};

class App extends Component{
  // state = {
  //   // contacts: [],
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // } 

  state = {
    ...INITIAL_STATE
  };

  heandleOnFilter = evt => {
    const { name, value } = evt.target;  
    this.setState({ [name]: value });

    const { contacts, filter } = this.state;

    const filtered = contacts.filter(contact => {
      const filterLower = filter.toLowerCase();
      const contactNameLower = contact.name.toLowerCase();
      
      return contactNameLower.includes(filterLower);
    });
    
    console.log(filtered);

    this.setState({ contacts: [...filtered] });

  }

  
  handleUpdateContacts = ({name, number}) => {
    
    const newUser = {
      id: nanoid(),
      name,
      number
    };

    this.setState({ contacts: [...this.state.contacts, newUser] });    
  }

  // handleSearchField = (evt) => {
  //   console.log(evt);
  
  // }
  
  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleUpdateContacts} />
        <h2>Contacts</h2>
        <input type="text" name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Use only letters, apostrophe, dash and spaces."
          value={filter} onChange={this.heandleOnFilter}
        />
        {/* <Filter option={this.heandleFilter} search={this.handleSearchField} /> */}
        <ContactList contactsNames={contacts} />
      </div>
    )
  }  
}

export default App;
