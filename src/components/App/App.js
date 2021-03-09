import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import { clearError, contactsSelector } from '../../redux/contacts';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  componentDidUpdate() {
    if (this.props.error !== null) {
      toast.error('No Network');
      setTimeout(this.props.clearError(), 500);
    }
  }
  render() {
    return (
      <>
        <Container>
          <CSSTransition in={true} appear={true} timeout={250} classNames="Logo" unmountOnExit>
            <h1>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
        </Container>
        <Container title="Contacts">
          <Filter />
          {this.props.loading && <Loader type="Rings" color="#00BFFF" height={200} width={200} />}
          <ContactList />
        </Container>
        <ToastContainer position="top-right" />
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: contactsSelector.getLoading(state),
  error: contactsSelector.getError(state),
});

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
