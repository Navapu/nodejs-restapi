const express = require('express');
const router = express.Router();

const {getEmployees, getEmployee, postEmployee, putEmployee, deleteEmployee}=require("../controllers/employees.controller")

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', postEmployee);


router.patch('/employees/:id', putEmployee);

router.delete('/employees/:id', deleteEmployee);
  
  
module.exports = router;