import { useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';

const ContactsNotification = () => {
  const savedContactsNumber = useSelector(selectContacts).length;
  const filteredContactsNumber = useSelector(selectVisibleContacts).length;

  return (
    <div>
      {savedContactsNumber !== filteredContactsNumber ? (
        <span>
          Found contacts: <b>{filteredContactsNumber}</b>
        </span>
      ) : (
        <span>
          Total number of contacts: <b>{savedContactsNumber}</b>
        </span>
      )}
    </div>
  );
};

export default ContactsNotification;
