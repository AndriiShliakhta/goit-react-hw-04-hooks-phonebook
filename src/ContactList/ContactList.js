import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, searchName, deleteContact }) {
  const filteredNames = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(searchName.toLowerCase());
    });
  };
  return (
    <ul className={styles.contactList}>
      {filteredNames().map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
          id={id}
        />
      ))}
    </ul>
  );
}
