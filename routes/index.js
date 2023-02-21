const express = require('express');
const router = express.Router();
const {ping,index} = require('../controllers/index.controller')

router.get('/ping', ping);

router.get('/', index);


module.exports = router;