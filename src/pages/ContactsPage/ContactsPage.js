import React, { Component } from 'react';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import Spinner from '../../components/Spinner';
import ContactList from '../../components/ContactList';

class ContactsPage extends Component {
  //   componentDidMount() {
  //     this.props.fetchContacts();
  //   }

  render() {
    const { isLoading, error } = this.props;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <button>Add new contact</button>
        <Filter />

        {isLoading && <Spinner />}
        {error && <p className="errorMessage">{error}</p>}
        <ContactList />
      </Container>
    );
  }
}

export default ContactsPage;
