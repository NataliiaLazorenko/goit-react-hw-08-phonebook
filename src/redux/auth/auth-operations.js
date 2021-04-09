import axios from 'axios';
import actions from './auth-actions';

const signup = user => async dispatch => {
  dispatch(actions.signupRequest());

  try {
    const response = await axios.post('/users/signup', user);

    dispatch(actions.signupSuccess(response.data));
  } catch (error) {
    dispatch(actions.signupError(error.message));
  }
};

const login = user => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const response = await axios.post('/users/login', user);

    dispatch(actions.loginSuccess(response.data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

const operations = { signup, login };

export default operations;
