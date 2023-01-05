import React, { Component } from "react";
import { Link } from "react-router-dom";
const contactStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  // backgroundColor: "red",
};
export default class Contact extends Component {
  render() {
    console.log(this.props);
    const { contact } = this.props;
    return (
      <div className="card contact my-4 text-center" style={contactStyle}>
        {" "}
        <div className="card-body">
          <h2 className="card-title">
            {contact.first_name}
            {contact.last_name}
          </h2>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.gender}</p>
          <p className="card-text">date of Birth:{contact.dob}</p>
          <Link className="btn btn-primary"to={`/contacts/${contact.id}`}>know More</Link>
        </div>
      </div>
    );
  }
}
