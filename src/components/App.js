import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    console.log(contact);
  }

  return (
    <div>
      <Header />
      <AddContact handleAddContact={handleAddContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
