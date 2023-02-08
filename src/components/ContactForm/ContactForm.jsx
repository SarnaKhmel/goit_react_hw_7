import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { selectContacts } from 'redux/selectors';

import './contactForm.css';
const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === nameValue.toLowerCase()
      )
    ) {
      form.reset();
      return alert('already exist');
    }

    const newContact = {
      name: nameValue,
      phone: numberValue,
    };

    dispatch(addContact({ ...newContact }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">Name: </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Only letters, apostrophe, dash and spaces."
        required
        placeholder="Enter name"
        className="input"
      />

      <label className="label">Number:</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter number"
        className="input"
      />

      <button type="submit" className="btn">
        add contact
      </button>
    </form>
  );
};

export default Form;
