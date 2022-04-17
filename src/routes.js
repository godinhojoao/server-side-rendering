const routes = require('express').Router();
const Task = require('./models/Task');
const User = require('./models/User');

routes.get('/', (req, res) => {
  res.render('pages/sign-in.ejs');
});

routes.get('/dashboard/:userId', async (req, res) => {
  try {
    const [user, error] = await User.getUserWithTasks(req.params.userId);

    if (!user || error) { return res.redirect('/'); }

    return res.render('pages/dashboard/list', { user: user });
  } catch (error) {
    return res.redirect('/');
  }
});

routes.get('/dashboard/create-task/:userId', (req, res) => {
  return res.render('pages/dashboard/create-task');
});

routes.get('/dashboard/edit-task/:id/:userId', async (req, res) => {
  try {
    const task = await Task.getOne(req.params.id);

    return res.render('pages/dashboard/create-task', { task });
  } catch (error) {
    return res.redirect('/');
  }
});

routes.use((req, res) => {
  return res.redirect('/');
});

module.exports = routes;