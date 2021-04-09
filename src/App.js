import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import routes from './routes';

const App = () => (
  <>
    <AppBar />

    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.register} component={RegisterPage} />
      <Route path={routes.login} component={LoginPage} />
      <Route path={routes.contacts} component={ContactsPage} />
      <Redirect to={routes.home} />
    </Switch>
  </>
);

export default App;
// TODO: додати <Suspense> та lazy
