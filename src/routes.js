const routes = require('express').Router();
const Task = require('./model/Task');

routes.get('/', (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.render('pages/index', { tasks });
    })
    .catch((err) => { res.send('Aconteceu o seguinte erro: ' + err); });
});

routes.get('/cadastrar-atividade', (req, res) => {
  res.render('pages/create-task');
});

routes.post('/', (req, res) => {
  const task = new Task({
    name: req.body.name,
    status: req.body.status
  });

  task.save((error, docs) => {
    if (error) { return res.send('Houve um erro:', error); }
    res.send(docs);
  })
});

routes.use((req, res, next) => {
  return res.status(404).json({ "error": "Resultado não encontrado." });
});

module.exports = routes;