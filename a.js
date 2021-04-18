const Koa = require("koa")
const Router = require("koa-router")
const cors = require('koa2-cors');

const router = new Router()
const app = new Koa()

app.use(cors());

const path = require('path')
const fs = require('fs')



router.get("/", (ctx, next) => {
  // ctx.body = 555
  ctx.body = fs.readFileSync('./ceshi.js')
  // ctx.body = JSON.stringify(fs.readFileSync('./index.html'))
})
// app.use(async (ctx) => {
//   let url = ctx.url
//   // 从上下文的request对象中获取
//   let request = ctx.request
//   let req_query = request.query
//   let req_querystring = request.querystring

//   // 从上下文中直接获取
//   let ctx_query = ctx.query
//   let ctx_querystring = ctx.querystring

//   ctx.body = {
//     url,
//     req_query,
//     req_querystring,
//     ctx_query,
//     ctx_querystring
//   }
// })
app.use(router.routes())

app.listen(8088, () => {
  console.log(`run appliction at http://127.0.0.1:8088`)
})