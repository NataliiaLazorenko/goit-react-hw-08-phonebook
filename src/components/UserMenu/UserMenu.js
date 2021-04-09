import React from 'react';

const UserMenu = ({ email, onLogout }) => (
  <>
    <p>{email}</p>
    <button type="button" onClick={onLogout}>
      Log out
    </button>
  </>
);

export default UserMenu;
