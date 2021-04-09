import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch ({ message }) {
    dispatch(actions.fetchContactsError(message));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(actions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    axios.delete(`/contacts/${contactId}`);

    dispatch(actions.deleteContactSuccess(contactId));
  } catch ({ message }) {
    dispatch(actions.deleteContactError(message));
  }
};

const operations = { fetchContacts, addContact, deleteContact };

export default operations;
