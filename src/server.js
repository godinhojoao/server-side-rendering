const app = require('./App');

app.listen(process.env.SERVER_PORT || 8080, () => console.log('rodando em: http://localhost:8080'));