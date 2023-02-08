import { useDispatch } from 'react-redux';
import { filterList } from 'redux/filtersSlice';
import './contactsFilter.css';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const inputValue = e.target.value;

    dispatch(filterList(inputValue));
  };

  return (
    <>
      <label className="label_input">Find contacts by name:</label>
      <input
        className="filter_input"
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={handleChange}
      ></input>
    </>
  );
};

export default ContactsFilter;
