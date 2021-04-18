const mysql = require("mysql")
const pool = mysql.createPool({
  host: "121.5.42.203",
  user: "v_jiabcao",
  password: "v_jiabcao",
  database: "v_jiabcao",
})
let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) reject(err)
      connection.query(sql, values, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
        connection.release()
      })
    })
  })
}

module.exports = {
  query
}