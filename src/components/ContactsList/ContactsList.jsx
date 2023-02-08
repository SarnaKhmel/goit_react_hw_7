import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
// import { Item } from './ContactsListItem';
import { Item } from './Item';
const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul width="430px">
      <Item filteredContacts={filteredContacts}></Item>
    </ul>
  );
};
export default ContactsList;
