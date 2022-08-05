import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { addContact } from 'redux/contacts-actions';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChanger = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChanger}
            placeholder="Name"
          />
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChanger}
            placeholder="Phone"
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contacts
        </button>
      </form>
    </>
  );
};
const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
