const pool= require('../db.js')

const getEmployees = async function(req, res, next) {
    const [rows]= await pool.query('SELECT * FROM employee')
    // res.send("Obteniendo empleados")
    res.json(rows)
}

const postEmployees = async function(req, res, next) {

    const {name,salary}=req.body
    const [rows]= await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
    console.log(req.body)
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

const putEmployees = function(req, res, next) {
    res.send("Actualizando empleados")
}

const deleteEmployees = function(req, res, next) {
    res.send("Eliminando empleados")
}

module.exports={
    getEmployees,
    postEmployees,
    putEmployees,
    deleteEmployees
}