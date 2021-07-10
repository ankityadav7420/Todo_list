const { query } = require('express');
const Task = require('../models/task');

//setting up home view section
module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching tasks from database');
            return;
        }
        res.render('home', {
            title: "TODO_App_Home",
            task_list: tasks
        });
    });
}

// updating the task list
module.exports.update = function (req, res) {
    Task.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function (err, newContact) {
        if (err) {
            console.log('error in creating a TODO!');
            return;
        }
        console.log('********', newContact);
        res.redirect('back');
    });
}

//deleting the tasklist
module.exports.del = function (req, res) {
    let id = req.query.id;
    // console.log(id);
    Task.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('err in delete the task from databse');
            return;
        }
        return res.redirect('back');
    });
}
