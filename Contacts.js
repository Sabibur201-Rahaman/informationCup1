import React, { Component } from "react";
import Contact from "../components/Contact";


export default class Contacts extends Component {
  
  render() {
    
    const { contacts } = this.props;
    return (
      <div>
        <h2 className="text-center">all contacts are goes here</h2>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}
