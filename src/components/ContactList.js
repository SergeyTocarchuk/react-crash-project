import React from "react";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <div key={contact.id}>
        <div>{contact.name}</div>
        <div>{contact.email}</div>
      </div>
    )
  })
  return (
    <div className="ui fixed menu">
      <h4>Contact List</h4>
      <div>{renderContactList}</div>
    </div>
  );
}

export default ContactList;