import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';
import { showNotification } from './notificationSlice';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  filter: 'all',
  searchTerm: '',
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.get('/tasks');
      dispatch(showNotification({ message: 'Tasks fetched successfully', severity: 'success' }));
      return response.data;
    } catch (error) {
      dispatch(showNotification({ message: 'Failed to fetch tasks', severity: 'error' }));
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post('/tasks', newTask);
      dispatch(showNotification({ message: 'Task added successfully', severity: 'success' }));
      return response.data;
    } catch (error) {
      dispatch(showNotification({ message: 'Failed to add task', severity: 'error' }));
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (updatedTask, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
      dispatch(showNotification({ message: 'Task updated successfully', severity: 'success' }));
      return response.data;
    } catch (error) {
      dispatch(showNotification({ message: 'Failed to update task', severity: 'error' }));
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, { dispatch, rejectWithValue }) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      dispatch(showNotification({ message: 'Task deleted successfully', severity: 'success' }));
      return taskId;
    } catch (error) {
      dispatch(showNotification({ message: 'Failed to delete task', severity: 'error' }));
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const toggleTaskStatus = createAsyncThunk(
  'tasks/toggleTaskStatus',
  async (taskId, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.patch(`/tasks/${taskId}/complete`);
      dispatch(showNotification({ message: 'Task status toggled', severity: 'success' }));
      return response.data;
    } catch (error) {
      dispatch(showNotification({ message: 'Failed to toggle task status', severity: 'error' }));
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // addTask
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // updateTask
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // toggleTaskStatus
      .addCase(toggleTaskStatus.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(toggleTaskStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // deleteTask
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setFilter, setSearchTerm } = tasksSlice.actions;
export default tasksSlice.reducer;
