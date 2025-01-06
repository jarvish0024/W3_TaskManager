const { createTask, fetchAllTask, updateTaskById, deleteTaskById } = require('../Controllers/TaskController');

const router = require('express').Router();

// too get tasks
router.get('/',fetchAllTask)

// to create task
router.post('/',createTask)

// to update task
router.put('/:id',updateTaskById)

// to delete task
router.delete('/:id',deleteTaskById)

module.exports = router;