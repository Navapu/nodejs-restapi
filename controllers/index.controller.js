const pool= require('../db.js')

const ping = async function(req, res, next) {
    const [result] = await pool.query('SELECT 1+1 as result')
    res.json(result);
}

const index =  function(req, res, next) {
    res.send("Pagina principal");
}

module.exports={ping, index}