const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({
    _id: '5c508914d4543749b94a984a'
}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('5c508914d4543749b94a984a').then((todo) => {
    console.log(todo);
})