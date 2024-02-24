import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import contactList from "./data/ContactList.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState(contactList);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContact([...contact, newContact]);
  };

  const foundContacts = contact.filter(
    (c) =>
      c.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      c.number.includes(filter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={foundContacts} />
    </div>
  );
}

export default App;
