const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {ObjectId} = require('mongodb');

const todos = [{
  _id: new ObjectId(),
  text: 'First test todo'
}, {
  _id: new ObjectId(),
  text: 'Second test todo'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});


describe('GET /todos/:id', () => {//это наш тест кейс с названием
  it('should be get id properrty', (done) => {//это сам тест, его начало, каждый it это новый тест в тестовой батарее describe
    //то есть в данном it мы проверяем совпадает ли текст в todos[0].text  с тем, что мы полкчаем
    request(app)  //это грубо говоря запрос на наш тест
    .get(`/todos/${todos[0]._id.toHexString()}`)//здесь мы делаем гет запрос по адресу/todos/${todos[0]._id.toHexString()} 
    .expect(200)
    .expect((res) => {//здесь мы создаем  тест функцию для того, чтобы проверить  совпадает ли результат с текстом в переменной todos
        expect(res.body.todo.text).toBe(todos[0].text);//а здесь в тест-функции мы проверяем совпадение фактического текста с тем, что хотим видеть
      })
      .end(done);
    });
    it('should return 404 if todo not found', (done) => {
      //здесь нам надо сделать запрос с реальным айди и если его нет вернуть 404
      let hexId = new ObjectId().toHexString();
      request(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done);
    });
    it('should return 404 if it not valid id', (done) => {
      request(app)
      .get('/todos/1231')
      .expect(404)
      .end(done)
  });
});

