const express = require('express');
const router = express.Router();
const getEmployees=require("../controllers/employees.controller")
const postEmployees=require("../controllers/employees.controller")
const putEmployees=require("../controllers/employees.controller")
const deleteEmployees=require("../controllers/employees.controller")


router.get('/employees', getEmployees);

router.post('/employees', postEmployees);


router.put('/employees', putEmployees);

router.delete('/employees', deleteEmployees);
  
  
  module.exports = router;