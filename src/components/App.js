import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  const handleRemoveContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <ContactList 
              contacts={contacts} 
              getContactId={handleRemoveContact}
            />
          }/>
          <Route path="/add" element={
            <AddContact
              handleAddContact={handleAddContact}
            />
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
