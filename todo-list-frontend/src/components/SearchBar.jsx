import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/tasksSlice';

function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <TextField
      label="Search Tasks"
      variant="outlined"
      fullWidth
      onChange={handleChange}
      sx={{ mb: 2 }}
    />
  );
}

export default SearchBar;
