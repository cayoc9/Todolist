import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

function EditTaskModal({ open, onClose, task, onSave }) {
  const [description, setDescription] = useState(task.description);

  useEffect(() => {
    if (open) {
      setDescription(task.description);
    }
  }, [open, task.description]);

  const handleSave = () => {
    if (description.trim()) {
      onSave({ ...task, description });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: 400,
        }}
      >
        <TextField
          label="Edit Task"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={onClose} variant="outlined" color="secondary" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditTaskModal;
