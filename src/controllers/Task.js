const routes = require('express').Router();
const Task = require('./../models/Task');

routes.put('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await Task.update(taskId, req.body);

    return res.status(200).send(updatedTask);
  } catch (error) {
    return res.status(422).send('Houve um erro');
  }
});

routes.delete('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const [task, error] = await Task.delete(taskId);

    if (error) { return res.status(error.status || 422).send({ error: error.message || 'There was an error' }); }

    return res.status(204).send();
  } catch (error) {
    return res.status(422).send({ error: 'There was an error' });
  }
});

module.exports = routes;
