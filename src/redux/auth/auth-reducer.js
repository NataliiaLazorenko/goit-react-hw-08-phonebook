import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './auth-actions';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [actions.signupSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [actions.signupSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
});

const isLoading = createReducer(false, {
  [actions.signupRequest]: () => true,
  [actions.signupSuccess]: () => false,
  [actions.signupError]: () => false,

  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,
});

const error = createReducer(null, {
  [actions.signupError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,

  [actions.signupRequest]: () => null,
  [actions.loginRequest]: () => null,
});

export default combineReducers({ user, token, isLoading, error });
