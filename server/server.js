var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//get /todos/123123123
app.get('/todos/:id', (req, res) => {// здесь мы делаем гет запрос по адресу /todos/:id, на этот айди будет ссылаться req.params.id
  var id = req.params.id;  
  if(!ObjectId.isValid(id)) {//проверка на валидность
    return res.status(404).send({});//если не прошло, то вернем пустой объект со статусом 404
  }
  Todo.findById(id).then((todo) => {//выполним поиск по айдишнику в коллекции, если нет , то опять же 404 и отправим
    if(!todo){
      res.status(404).send();
    }
      res.send({todo});
  }).catch((e) => {
    res.status(404).send();
  });
}); 


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Server is started up in port ${port}`);
});

module.exports = {app};
