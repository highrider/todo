// // const MongoClient = require('mongodb').MongoClient;//сразу вызвали функцию из библиотеки с клиентом базы данных
// const {MongoClient, ObjectID} = require('mongodb');//это тоже самое, что строкой выше, просто используем деструктуризацию объекта
// //мы просто берем свойсвто MongoClient объекта require('mongodb') чтобы не выбирать весь класс целиком
// //а ObjectID это конструктор, который тоже есть в объекте mongodb, он отвечает за создание на лету айдишников в стиле монго




// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     //здесь мы коннектимся к локалхосту через протокол монгодб, тудуапп -название нащей базы
//     if(err){
//         return console.log('unable to connect to mongodb server');
//     }
//     console.log('connected to mongoDB server');
//     const db = client.db('TodoApp');

//     // db.collection('Todos').insertOne({//здесь мы создаем новую коллекцию, то есть таблицу по-старому с именем Todos
//     //     text: 'Something to do',//это наша апись в бд
//     //     completed: false//тоже
//     // }, (err, result) => {
//     //     if(err){
//     //         return console.log('unable to insert todo', err);
//     //     }
//     //     console.log(JSON.stringify(result.ops, undefined, 2));
//     // })

//     db.collection('Users').insertOne({ //здесь мы создаем новую коллекцию, то есть таблицу по-старому с именем Todos
//         name: 'Pavel',//это наша апись в бд
//         age: 28,//тоже
//         location: 'Minsk'
//     }, (err, result) => {
//         if(err){
//             return console.log('unable to connect to server', err);
//         }
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));//результат нашей записи в базе данных в json
//     });

//     client.close();//закрывает соединение с сервером
// });

// // console.log(JSON.stringify(result.ops[0]._id.getTimestamp() так мы модем проверить когда был создан тот или иной айдишник
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TodoApp");
  dbo.collection("Todos").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});