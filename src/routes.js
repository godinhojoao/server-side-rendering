const routes = require('express').Router();
const Task = require('./model/Task');

// pages to render
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

routes.get('/editar-atividade/:id', (req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      res.render('pages/create-task', { task });

    })
    .catch((err) => { res.send('Aconteceu o seguinte erro: ' + err); });
});

// endpoints
routes.post('/', (req, res) => {
  const task = new Task({
    name: req.body.name,
    status: req.body.status
  });

  task.save((error, docs) => {
    if (error) { return res.send('Houve um erro:', error); }
    res.status(201).send(docs);
  })
});

routes.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  Task.deleteOne({ id: taskId }, (error, docs) => {
    if (error) { return res.send('Houve um erro:', error); }
    res.status(204).send();
  })
});

routes.put('/:id', (req, res) => {
  const taskId = req.params.id;
  Task.updateOne({ id: taskId }, req.body, (error, docs) => {
    if (error) { return res.send('Houve um erro:', error); }
    res.status(200).send(docs);
  })
});

routes.use((req, res) => {
  return res.status(404).json({ "error": "Resultado não encontrado." });
});

module.exports = routes;