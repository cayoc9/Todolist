import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  severity: 'info',
  open: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity || 'info';
      state.open = true;
    },
    clearNotification: (state) => {
      state.open = false;
    },
  },
});

export const { showNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
