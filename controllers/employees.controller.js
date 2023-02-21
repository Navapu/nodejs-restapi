const pool= require('../db.js')

const getEmployees = async function(req, res, next) {
    const [rows]= await pool.query('SELECT * FROM employee')
    // res.send("Obteniendo empleados")
    res.json(rows)
}

const getEmployee= async (req,res)=>{
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    console.log(rows)

    if (rows.length<=0){
        return res.status(404).json({
            message: 'Empleado no encontrado'
        })
    }

    res.json(rows[0])
}

const postEmployee = async function(req, res, next) {

    const {name,salary}=req.body
    const [rows]= await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
    console.log(req.body)
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

const putEmployee = async function(req, res, next) {
    const {id} = req.params
    const {name, salary} = req.body
    const [rows] = await pool.query('UPDATE employee SET NAME = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',[name,salary,id])
    if (rows.affectedRows<=0) {
        return res.status(404).json({
            message: 'Empleado no encontrado'
        })
    }
    const [result] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(result[0])

}

const deleteEmployee = async function(req, res, next) {
    const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    console.log(rows)

    if (rows.affectedRows<=0) {
        return res.status(404).json({
            message: 'Empleado no encontrado'
        })
    }

    res.sendStatus(204)
}

module.exports={
    getEmployees,
    getEmployee,
    postEmployee,
    putEmployee,
    deleteEmployee
}