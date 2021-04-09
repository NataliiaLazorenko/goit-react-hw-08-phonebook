import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [authActions.signupSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.signupSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const isLoading = createReducer(false, {
  [authActions.signupRequest]: () => true,
  [authActions.signupSuccess]: () => false,
  [authActions.signupError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,
});

const error = createReducer(null, {
  [authActions.signupError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,

  [authActions.signupRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logoutRequest]: () => null,
});

export default combineReducers({ user, token, isLoading, error });
