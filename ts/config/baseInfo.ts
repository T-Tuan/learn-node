interface dataBase {
  host: String,
  user: String,
  password: String,
  database: String,
}

interface servers {
  host: String,
  port?: String,
  username: String,
  password: String,
}

interface adminInfo {
  dataBase: dataBase,
  servers?: servers
}

const adminInfo: adminInfo = {
  dataBase: {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'v_jiabcao'
  }
  /*
  dataBase: {
    host: '121.5.42.203',
    user: 'v_jiabcao',
    password: 'v_jiabcao',
    database: 'v_jiabcao'
  }
   */
}

module.exports = adminInfo
