import React from 'react';
import { Container, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';
import SearchBar from './components/SearchBar';
import TaskList from './components/TaskList';
import AppNotification from './components/AppNotification';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        ToDo List Application
      </Typography>
      <TaskForm />
      <TaskFilters />
      <SearchBar />
      <TaskList />
      <AppNotification />
    </Container>
  );
}

export default App;
