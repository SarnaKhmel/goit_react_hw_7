import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { PropTypes } from 'prop-types';
import './item.css';

export const Item = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  return filteredContacts.map(({ name, phone, id }) => (
    <li key={id}>
      <p className="name">{name}</p>
      <p className="number">{phone}</p>

      <button className="del_btn" onClick={() => dispatch(deleteContact(id))}>
        X
      </button>
    </li>
  ));
};
