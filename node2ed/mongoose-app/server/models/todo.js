const mongoose = require('mongoose');
const { Schema } = mongoose;

const todosSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: 0
    }
});

const Todo = mongoose.model('Todo', todosSchema);

module.exports = {
    Todo : Todo
};