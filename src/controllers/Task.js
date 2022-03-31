const routes = require('express').Router();
const Task = require('./../models/Task');

routes.post('/task', async (req, res) => {
  try {
    const task = await Task.create({
      name: req.body.name,
      status: req.body.status
    });

    return res.status(201).send(task);
  } catch (error) {
    return res.status(422).send('Houve um erro');
  }
});

routes.delete('/task/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.delete(taskId);

    return res.status(204).send();
  } catch (error) {
    return res.status(422).send('Houve um erro');
  }
});

routes.put('/task/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await Task.update(taskId, req.body);

    return res.status(200).send(updatedTask);
  } catch (error) {
    return res.status(422).send('Houve um erro');
  }
});

routes.use((req, res) => {
  return res.status(404).json({ "error": "Resultado não encontrado." });
});

module.exports = routes;
