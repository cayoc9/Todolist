const { Op } = require('sequelize');
const Task = require('../models/task');

exports.listTasks = async (req, res) => {
  try {
    const { search, status } = req.query;
    let where = {};

    if (search) {
      where.description = { [Op.like]: `%${search}%` };
    }

    if (status) {
      where.status = status;
    }

    const tasks = await Task.findAll({ where });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: 'Description is required.' });
    }
    const task = await Task.create({ description });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }
    if (description) {
      task.description = description;
    }
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }
    await task.destroy();
    res.json({ message: 'Task successfully deleted.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    if (task.status === 'pending') {
      task.status = 'completed';
      task.completed_at = new Date();
    } else {
      task.status = 'pending';
      task.completed_at = null;
    }

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
