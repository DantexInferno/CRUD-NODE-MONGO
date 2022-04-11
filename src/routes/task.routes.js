const express = require('express');
const router = express.Router();

const TaskModel = require('../models/task');

router.get('/', async (req, res) => {
  const tasks = await TaskModel.find();
  console.log(tasks);
  res.json(tasks)
});

router.get('/:id', async (req, res) => {
  const tasks = await TaskModel.findById(req.params.id);
  console.log(tasks);
  res.json(tasks)
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  const task = new TaskModel({title, description});
  console.log(task);
  await task.save()
  res.json({
    status:"saved it"
  })
})

router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTask = {title, description};
  await TaskModel.findByIdAndUpdate(req.params.id, newTask);
  res.json({
    status:"updated"
  });
});

router.delete('/:id', async (req, res) => {
  await TaskModel.findByIdAndDelete(req.params.id)
  res.json({
    status:"deleted"
  });
})

module.exports = router
