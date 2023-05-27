import React, { Component } from "react";
import { nanoid } from 'nanoid';

// import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

class App extends Component{
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  // handleChange = evt => {
  //   const { name, value } = evt.target;
  //   this.setState({ [name]: value });      
  // }; 
  
  // handleState = (foobar) => {
  //   this.setState({ name: foobar });
  // }

  handleSubmitContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { name, number } = evt.target.elements;
    const contactName = name.value;
    const contactNumber = number.value;
    // console.log(contactName);
    // this.handleState(contactName);
    // this.setState({ name: contactName })

    const newUser = { id: nanoid(), name: contactName, number: contactNumber };
    
    this.setState({ contacts: [...this.state.contacts, newUser] });

    // this.setState({ contacts: [...this.state.contacts, contactName] });
    // this.setState({contacts: [...this.state.contacts, contactName]});
    // console.log(this.props);
    form.reset();   
  }

  render() {

    const { contacts } = this.state;
    // console.log('name', name);
    // console.log('contacts', this.state.contacts);

    return (
      <div>        
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmitContact} >
          <label>
            <input type="text" name="name" required/>
          </label>
          <label>
            <input type="tel" name="number" required/>
          </label>
          <button type="submit">Add Contact</button>
        </form>

        {/* <ContactForm formSubmit={this.handleSubmitContact} /> */}
        {/* <ContactForm formSubmit={this.handleSubmitContact} onSubmit={values => console.log(values)} /> */}
        <h2>Contacts</h2>       
        {/* <Filter /> */}
        <ContactList contactsNames={contacts} />        
      </div>
    )
  }  
}

export default App;

// value={name} onChange={this.handleChange}