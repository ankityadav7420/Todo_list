const mongoose = require('mongoose');

//schema for define field for collection part
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;