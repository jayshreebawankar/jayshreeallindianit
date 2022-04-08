const express = require('express')
const route = express.Router();
const empController = require('../Controller/empController')

route.get('/get/',empController.getEmployee)
route.post('/sign',empController.createEmployee)
route.get('/get/:id',empController.getByEmployeeId)
route.put('/update/:id',empController.updateEmpData)
route.delete('/delete/:id',empController.dateteEmployee)

module.exports = route;