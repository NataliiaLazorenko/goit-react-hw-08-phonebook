import { connect } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import ContactsPage from './ContactsPage';

const mapStateToProps = state => ({
  isLoading: selectors.getIsLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
