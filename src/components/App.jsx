import React, { Component } from "react";

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
  
  handleState = (foobar) => {
    this.setState({ name: foobar });
  }

  handleSubmitContact = evt => {
    evt.preventDefault();   
    const { name } = evt.target.elements;
    const contactName = name.value;
    console.log(contactName);
    this.handleState(contactName);

    // this.props.onSubmit({ ...this.state });
  }

  render() {

    const { name } = this.state;
    console.log('name render',name);

    return (
      <div>        
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmitContact} >
          <label>
            <input type="text" name="name" required/>
          </label>
          <button type="submit">Add Contact</button>
        </form>

        {/* <ContactForm formSubmit={this.handleSubmitContact} /> */}
        {/* <ContactForm formSubmit={this.handleSubmitContact} onSubmit={values => console.log(values)} /> */}
        <h2>Contacts</h2>       
        {/* <Filter /> */}
        <ContactList name={name} number='124563221588'/>        
      </div>
    )
  }  
}

export default App;

// value={name} onChange={this.handleChange}