import Form from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import Notification from './Notification/Notification';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

import './app.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const useFetchContacts = dispatch => {
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  };
  const { fetchContacts } = require('redux/operations');

  useFetchContacts(dispatch);
  return (
    <>
      <div className="phonebook">
        <div className="title">Phonebook</div>
        <Form />
        <ContactsFilter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
        <Notification />
      </div>
    </>
  );
};
