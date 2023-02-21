const express = require('express');
const router = express.Router();
const pool= require('../db.js')

/* GET home page. */
router.get('/ping', async function(req, res, next) {
  const [result] = await pool.query('SELECT 1+1 as result')
  res.json(result);
});
router.get('/', function(req, res, next) {
  res.send("Hola mundo");
});
router.get('/employees', function(req, res, next) {
  res.send("Obteniendo empleados");
});
router.post('/employees', function(req, res, next) {
  res.send("Añadiendo empleados");
});
router.put('/employees', function(req, res, next) {
  res.send("Actualizando empleados");
});
router.delete('/employees', function(req, res, next) {
  res.send("Eliminando empleados");
});


module.exports = router;