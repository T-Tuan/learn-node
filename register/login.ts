const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.post('/login',(ctx => {
  console.log(ctx);
}))

app.use(router.routes())

app.listen('1120')