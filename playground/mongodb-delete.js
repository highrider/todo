// const MongoClient = require('mongodb').MongoClient;//сразу вызвали функцию из библиотеки с клиентом базы данных
const {MongoClient, ObjectID} = require('mongodb');//это тоже самое, что строкой выше, просто используем деструктуризацию объекта
//мы просто берем свойсвто MongoClient объекта require('mongodb') чтобы не выбирать весь класс целиком
//а ObjectID это конструктор, который тоже есть в объекте mongodb, он отвечает за создание на лету айдишников в стиле монго




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //здесь мы коннектимся к локалхосту через протокол монгодб, тудуапп -название нащей базы
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongoDB server');
    
    const db = client.db('TodoApp');//делаем сокращение, чтобы проще было манипулировать клиентом базы данных TodoApp
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'go to work'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text : "Eat a lunch"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Pavel'}).then((result) => {
        console.log(result);
    });
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5c48bbcf51e597223060b0d8")}).then((result) => {
        console.log(result);
    });

    // client.close();//закрывает соединение с сервером
});
