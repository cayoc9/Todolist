const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

module.exports = app;
