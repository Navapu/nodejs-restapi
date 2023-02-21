const { createPool } = require('mysql2/promise')

const pool = createPool({
    host: '',
    user:'',
    password:'',
    port: 3306,
    database: 'companydb'
})

module.exports = pool