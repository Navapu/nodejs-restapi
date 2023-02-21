const express = require('express');
const router = express.Router();
const pool= require('../db.js')
const employeesRoutes=require("./employees")

router.get('/ping', async function(req, res, next) {
  const [result] = await pool.query('SELECT 1+1 as result')
  res.json(result);
});
router.get('/', function(req, res, next) {
  res.send("Hola mundo");
});

router.use(employeesRoutes)

module.exports = router;