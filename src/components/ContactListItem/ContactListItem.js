import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';

// TODO: додати update контакту
const ContactListItem = ({ name, number, onDeleteContact }) => (
  <>
    <p>
      <span className={styles.contactName}>{name}: </span>
      {number}
    </p>

    <button
      type="button"
      onClick={onDeleteContact}
      className={`button ${styles.deleteContactBtn}`}
    >
      Delete
    </button>
  </>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
