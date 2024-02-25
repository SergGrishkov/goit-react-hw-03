import { ContactForm } from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import contactList from "../../data/ContactList.json";
import {getContacts, setContacts} from '../../helpers/LocalStorage'
import "./App.css";
import { useEffect, useState } from "react";

const storageContacts = getContacts();


function App() {
  const [contact, setContact] = useState(
    storageContacts ? JSON.parse(storageContacts) : contactList
  );
  const [filter, setFilter] = useState("");
 

  const addContact = (newContact) => {
    setContact([...contact, newContact]);
  };

  const deleteContact = (contactId) => {
    setContact(contact.filter(c => c.id !== contactId));
  };

  const foundContacts = contact.filter(
    (c) =>
      c.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      c.number.includes(filter)
  );

   useEffect(() => {
     setContacts(contact);
   }, [contact]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      {contact.length > 0 && <ContactList contacts={foundContacts} onDelete={deleteContact} />}
    </div>
  );
}

export default App;
