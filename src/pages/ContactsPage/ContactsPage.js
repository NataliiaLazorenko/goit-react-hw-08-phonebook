import React, { Component } from 'react';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import Spinner from '../../components/Spinner';
import ContactList from '../../components/ContactList';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading, error } = this.props;

    return (
      <section className="section">
        <Container>
          <ContactForm />

          <h2>Contacts</h2>
          <button>Add new contact</button>
          <Filter />

          {isLoading && <Spinner />}
          {error && <p className="errorMessage">{error}</p>}
          <ContactList />
        </Container>
      </section>
    );
  }
}

export default ContactsPage;
