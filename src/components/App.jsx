import Form from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import './app.css';
export const App = () => {
  return (
    <>
      <div className="phonebook">
        <div className="title">Phonebook</div>
        <Form />
        <ContactsFilter />
        <ContactsList />
      </div>
    </>
  );
};
