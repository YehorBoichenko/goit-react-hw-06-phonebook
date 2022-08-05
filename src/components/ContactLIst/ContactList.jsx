import styles from '../ContactLIst/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts-selectors';
import ContactListItem from './ContactsListItem';
export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedData = filter.toLowerCase();
  const normalizedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedData)
  );
  return (
    <ul className={styles.list}>
      {normalizedContacts.map(({ name, number, id }) => (
        <ContactListItem name={name} number={number} id={id} key={id} />
      ))}
    </ul>
  );
}
