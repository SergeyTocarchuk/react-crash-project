import React from "react";
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    {
      id: 1,
      name: "John D.",
      email: "johny@example.com"
    },
    {
      id: 2,
      name: "Curt K.",
      email: "curt@example.com"
    }
  ]
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
