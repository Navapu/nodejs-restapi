const express = require('express');
const router = express.Router();

const {getEmployees, postEmployees, putEmployees, deleteEmployees}=require("../controllers/employees.controller")

router.get('/employees', getEmployees);

router.post('/employees', postEmployees);


router.put('/employees', putEmployees);

router.delete('/employees', deleteEmployees);
  
  
module.exports = router;
  