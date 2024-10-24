import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { List, CircularProgress, Typography } from '@mui/material';
import { fetchTasks } from '../redux/tasksSlice';

function TaskList() {
  const dispatch = useDispatch();
  const { tasks, loading, error, filter, searchTerm } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === 'all' || task.status === filter;
    const matchesSearch = task.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  }); 

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Erro ao carregar tarefas: {error}</Typography>;
  }

  return (
    <List>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
}

export default TaskList;
