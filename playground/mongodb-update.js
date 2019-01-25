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
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c4acc299d1d1128bfaef2be')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //     console.log(result);
    // });
//здесь мы юзаем findOneAndUpdate, чтобы найти нашу запись, затем следующий аргумент это объект, в котором есть свойство
//$set , в которое в нашем случае мы записывает completed: true, сюда мы вводим то, что хотим изменить в документе
//следующий объект, это опции, в данном случае returnOriginal, возвращает оригинальный объект если тру, иначе обновленный документ

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c48a073ae69f2202054fc02')
}, {
    $set: {
        name: "Peter"
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});


    // client.close();//закрывает соединение с сервером
});