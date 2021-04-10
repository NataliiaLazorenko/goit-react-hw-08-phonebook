import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const UserMenu = ({ email, onLogout }) => (
  <>
    <p>{email}</p>
    <button type="button" onClick={onLogout}>
      <ExitToAppIcon />
    </button>
  </>
);

export default UserMenu;
