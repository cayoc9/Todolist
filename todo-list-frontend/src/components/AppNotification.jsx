import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../redux/notificationSlice';

function AppNotification() {
  const dispatch = useDispatch();
  const { message, severity, open } = useSelector((state) => state.notification);

  const handleClose = () => {
    dispatch(clearNotification());
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AppNotification;
