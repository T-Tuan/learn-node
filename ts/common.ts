const config = require('./config/baseInfo')

console.log(config);
const mysql = require("mysql");
const pool = mysql.createPool(config.dataBase);

export const query = function (sql: string, values?: string): Promise<any> {
  return new Promise((resolve: Function, reject: Function) => {
    pool.getConnection(function (err: Error, connection: any) {
      if (err)
        connection.query(sql, values, (err: Error, rows: Object) => {
          if (err) reject(err);
          resolve(rows);
          connection.release();
        });
    });
  });
};


export function isAvailable(url: string): boolean {
  const IMG: HTMLImageElement = new Image()
  let available: boolean = true
  IMG.src = url
  IMG.onerror = function () {
    available = false
  }
  return available
}


