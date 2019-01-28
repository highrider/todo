const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5c4c3dc126305823282cab9b';

if(!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('unable to find this id in collection');
//     }
//     console.log('new todo', todo);
// }).catch((e) => console.log(e));

User.find({
    _id: '5c4c3dc126305823282cab9b'
}).then((users) => {
    console.log('this is fing method', users);
});

User.findOne({
    _id: '5c4c3dc126305823282cab9b'
}).then((user) => {
    console.log('this is one more user', user);
});

User.findById(id).then((user) => {
    if(!user) {
        return console.log('this user not exist');//проверка на существование
    }
    console.log('new user', user);
}).catch((e) => console.log(e));  //проверка на валидность