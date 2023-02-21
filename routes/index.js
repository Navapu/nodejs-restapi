const express = require('express');
const router = express.Router();
const employeesRoutes=require("./employees")
const {ping,index} = require('../controllers/index.controller')

router.get('/ping', ping);

router.get('/', index);

router.use(employeesRoutes)

module.exports = router;