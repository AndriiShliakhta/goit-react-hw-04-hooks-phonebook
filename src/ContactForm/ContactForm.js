import { useState } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ contacts, addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    const existingContact = contacts.find(contact => {
      return contact.name === name;
    });

    if (existingContact) {
      alert(existingContact.name + ' is already in contacts.');
      return;
    }
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit" className={styles.submitButton}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
