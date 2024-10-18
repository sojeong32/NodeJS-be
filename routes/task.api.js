const express = require('express');
const taskController = require('../controller/task.controller');
const router = express.Router()

router.post('/', taskController.createTask);

// router.get('/',taskController.getTask)
router.get('/',(req,res)=>{
    res.send('API is running')
})

router.put('/:id',taskController.updateTask)

router.delete('/:id',taskController.deleteTask)

module.exports = router;