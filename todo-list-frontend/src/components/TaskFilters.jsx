import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';

function TaskFilters() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
      <Button
        variant={currentFilter === 'all' ? 'contained' : 'outlined'}
        onClick={() => handleFilterChange('all')}
      >
        All
      </Button>
      <Button
        variant={currentFilter === 'pending' ? 'contained' : 'outlined'}
        onClick={() => handleFilterChange('pending')}
      >
        Pending
      </Button>
      <Button
        variant={currentFilter === 'completed' ? 'contained' : 'outlined'}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}

export default TaskFilters;
