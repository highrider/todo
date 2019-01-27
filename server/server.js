const express = require('express');
const bodyParser = require('body-parser');


let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/todo.js');
let {User} = require('./models/user.js');

//сохраним теперь что-нибудь новое

let app = express();

app.use(bodyParser.json());

// app.post('/todos', (req, res) => {
//     let todo = new Todo({
//         text: req.body.text
//     });
//     todo.save().then((doc) =>{
//         res.send(doc);
//     }, (e) => {
//         res.status(400).send(e);
//     })
// });

app.post('/todos', (req,res) => {
    let todo1 = new Todo({
        text: req.body.text
    });
    todo1.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});


app.listen(3000, () => {
    console.log('starting a localshost server');
});


module.exports = {app};







