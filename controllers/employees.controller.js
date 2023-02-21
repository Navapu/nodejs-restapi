const pool= require('../db.js')

const getEmployees = async function(req, res, next) {
    try {
        // throw new Error("Error porque si")
        const [rows]= await pool.query('SELECT * FROM employee')
        // res.send("Obteniendo empleados")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })
    }
}

const getEmployee= async (req,res)=>{
    try {
        // throw new Error("Error porque si")

        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length<=0){
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })
    }
}

const postEmployee = async function(req, res, next) {
    try {
        // throw new Error("Error porque si")

        const {name,salary}=req.body
        const [rows]= await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
        console.log(req.body)
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        }) 
    }
}

const putEmployee = async function(req, res, next) {
    try {
        // throw new Error("Error porque si")

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
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })    
    }

}

const deleteEmployee = async function(req, res, next) {
    try {
        // throw new Error("Error porque si")

        const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        console.log(rows)
    
        if (rows.affectedRows<=0) {
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })
    }
}

module.exports={
    getEmployees,
    getEmployee,
    postEmployee,
    putEmployee,
    deleteEmployee
}