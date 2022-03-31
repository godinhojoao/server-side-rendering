const routes = require('express').Router();
const Task = require('./models/Task');

routes.get('/', (req, res) => {
  res.render('pages/sign-in.ejs');
});

routes.get('/dashboard', async (req, res) => {
  try {
    const tasks = await Task.getAll();

    return res.render('pages/dashboard/list', { tasks });
  } catch (error) {
    return res.send('Aconteceu o seguinte erro: ' + error);
  }
});

routes.get('/dashboard/create-task', (req, res) => {
  return res.render('pages/dashboard/create-task');
});

routes.get('/dashboard/edit-task/:id', async (req, res) => {
  try {
    const task = await Task.getOne(req.params.id);

    return res.render('pages/dashboard/create-task', { task });
  } catch (error) {
    return res.send('Aconteceu o seguinte erro: ' + error);
  }
});


module.exports = routes;