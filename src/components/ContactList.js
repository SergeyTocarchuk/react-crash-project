import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const handleRemoveContact = (id) => {
    props.getContactId(id);
  }
  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard contact={contact} onRemoveContact={handleRemoveContact} key={contact.id} />
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