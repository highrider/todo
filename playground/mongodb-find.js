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
    
    // db.collection('Todos').find({
    //     _id: new ObjectID("5c489de3d717f825807bfc6d")
    // }).toArray().then((docs) => {//здесь мы просто берем коллекцию с названием Todos
    //     //применяем метод find , который выводит весь наш стаф, потом приводим к массиву и далее уже промисом указываем то, что нам надо сделать после того, как спарсили данные
    //     //в методе find мы можем также ебашить запросы, чтобы ограничивать нашу выборку... тут все ясно вроде бы
    //     //сделали find({completed: false})  и нам выдаст всю выборку , где completed = false
    //     //также наш метод find можно осуществить при помоще _id, но строку вводить нельзы , так как это объект, надо сделать следующим образом:
    //     //_id: new ObjectID("5c489de3d717f825807bfc6d"), теперь мы сможем осуществить поиск по айди
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log(err);
    // })

    // db.collection('Todos').find().count().then((count) => {//здесь мы просто берем коллекцию с названием Todos
    //     //метод файнд выгружает все, что есть в коллекции, а метож каунт считает так скахать, в данном случае нам вернет 2
    //     //количество наших записей в коллекции
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log(err);
    // });

    db.collection('Users').find({name: 'Pavel'}).toArray().then((docs) => {//здесь мы просто берем коллекцию с названием Todos
        //метод файнд выгружает все, что есть в коллекции, а метож каунт считает так скахать, в данном случае нам вернет 2
        //количество наших записей в коллекции
        // console.log(`names Pavel: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log(err);
    });

    // client.close();//закрывает соединение с сервером
});

