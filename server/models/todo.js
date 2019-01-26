var mongoose = require('mongoose');


let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,   //после того, как установим тру, это значит, что вводить данное поле обязательно
        minlength: 1, //тут все понятно
        trim: true  // обрезает ненужные пробелы вначале, точнее не проводит валидацию, выдает ошибку
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};
