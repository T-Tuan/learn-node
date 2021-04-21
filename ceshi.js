const http = require("http");
const Koa = require("koa");
const cors = require("koa2-cors");
const Router = require("koa-router");
// const MysqlSession = require("koa-mysql-session")

const router = new Router();
const app = new Koa();
app.use(cors());

let data = "";
let num = 0;
router.get("/", async (ctx, next) => {
  await new Promise((resolve, rej) => {
    http
      .get(
        "http://10.43.46.63:8088/api/ExportReportForm/exportFileHeadAndList",
        (res) => {
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            ctx.body = data;
            resolve();
          });
        }
      )
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  });
});

app.use(router.routes());

app.listen(8055, () => {
  console.log(`run appliction at http://127.0.0.1:8055`);
});
