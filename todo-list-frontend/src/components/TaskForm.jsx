import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box } from '@mui/material';
import { addTask } from '../redux/tasksSlice';

function TaskForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        description,
        status: 'pendente',
      };
      dispatch(addTask(newTask));
      setDescription('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 2 }}>
      <TextField
        label="Nova Tarefa"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Adicionar
      </Button>
    </Box>
  );
}

export default TaskForm;
