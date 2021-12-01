import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div key={id}>
      <img src={user} alt="user" />
      <div>{name}</div>
      <div>{email}</div>
      <div><FontAwesomeIcon icon="trash" onClick={() => props.onRemoveContact(id)} /></div>
    </div>
  )
}

export default ContactCard;