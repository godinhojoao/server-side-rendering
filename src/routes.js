const routes = require('express').Router();
// const User = require('./model/User');

const users = [
  {
    name: 'sapao',
    email: 'sapao@gmail.com',
    password: '123123',
    avatar: 'https://i1.wp.com/ciencianarua.net/wp-content/uploads/2020/03/Cururu3.jpg?resize=1024%2C670&ssl=1'
  },
  {
    name: 'sapao',
    email: 'sapao@gmail.com',
    password: '123123',
    avatar: 'https://i1.wp.com/ciencianarua.net/wp-content/uploads/2020/03/Cururu3.jpg?resize=1024%2C670&ssl=1'
  },
  {
    name: 'sapao',
    email: 'sapao@gmail.com',
    password: '123123',
    avatar: 'https://i1.wp.com/ciencianarua.net/wp-content/uploads/2020/03/Cururu3.jpg?resize=1024%2C670&ssl=1'
  },
];

routes.get('/', (req, res) => {
  // User.find({}).exec(function (err, users) {
  //   if (err) {
  //     res.send('Aconteceu o seguinte erro: ' + err);
  //   } else {
  //     res.render('pages/index', { users });
  //   }
  // });

  res.render('pages/index', { users });
});

routes.get('/cadastrar-usuarios', (req, res) => {
  res.render('pages/create-user');
});

routes.post('/', (req, res) => {
  console.log('req.body', req.body)
})

// routes.post('/', (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     avatar: req.body.avatar,
//   });

//   User.save((error, docs) => {
//     if (error) { return res.send('Houve um erro:', error); }

//     console.log('docs', docs)
//     res.send(docs);
//   })
// });

routes.use((req, res, next) => {
  return res.status(404).json({ "error": "Resultado não encontrado." });
});

module.exports = routes;