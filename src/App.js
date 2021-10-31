import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    setContacts(prevContacts => [
      ...prevContacts,
      { ...contact, id: uuidv4() },
    ]);
  };
  const findContact = e => {
    setFilter(e.target.value);
  };
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };
  useEffect(() => {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <h2>Contacts</h2>
      <Filter find={findContact} />

      {contacts.length > 0 && (
        <ContactList
          contacts={contacts}
          searchName={filter}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
}
