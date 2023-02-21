const getEmployees = function(req, res, next) {
    res.send("Obteniendo empleados")
}

const postEmployees =  function(req, res, next) {
    res.send("Añadiendo empleados")
}

const putEmployees = function(req, res, next) {
    res.send("Actualizando empleados")
}

const deleteEmployees = function(req, res, next) {
    res.send("Eliminando empleados")
}

module.exports=getEmployees
module.exports=postEmployees
module.exports=putEmployees
module.exports=deleteEmployees