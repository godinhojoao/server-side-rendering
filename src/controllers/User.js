const routes = require('express').Router();
const User = require('./../models/User');
const Task = require('./../models/Task');

routes.post('/users/login', async (req, res) => {
  try {
    const user = await User.login(req.body.name);

    return res.status(201).send(user);
  } catch (error) {
    return res.status(422).send({ error: 'There was an error.' });
  }
});

routes.post('/users/:id/tasks', async (req, res) => {
  try {
    const task = await Task.create({
      name: req.body.name,
      status: req.body.status
    });

    if (task) {
      const [updatedUser, error] = await User.addTask(req.params.id, task._id)

      if (error || !updatedUser) { return res.status(422).send({ error: 'Error adding task to user' }); }

      return res.status(201).send(updatedUser.tasks);
    }

  } catch (error) {
    return res.status(422).send({ error: 'There was an error' });
  }
});

module.exports = routes;
