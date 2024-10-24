import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask, toggleTaskStatus } from '../redux/tasksSlice';
import EditTaskModal from './EditTaskModal';

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    const updatedTask = {
      ...task,
      status: task.status === 'completed' ? 'pending' : 'completed',
    };
    dispatch(updateTask(updatedTask));
    dispatch(toggleTaskStatus(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    setIsEditing(false);
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="edit" onClick={handleEditClick}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <Delete />
            </IconButton>
          </>
        }
      >
        <Checkbox
          edge="start"
          checked={task.status === 'completed'}
          onChange={handleToggle}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText
          primary={task.description}
          style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}
        />
      </ListItem>
      <EditTaskModal
        open={isEditing}
        onClose={() => setIsEditing(false)}
        task={task}
        onSave={handleSave}
      />
    </>
  );
}

export default TaskItem;
