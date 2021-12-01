import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard contact={contact} />
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