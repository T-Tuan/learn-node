const Koa = require("koa")
const Router = require("koa-router")
const session = require("koa-session-minimal")
const redisStore = require("koa-redis")
// const MysqlSession = require("koa-mysql-session")

const router = new Router()
const app = new Koa()

router.get("/index", (ctx, next) => {
  ctx.body = "首页"
})

router.get("/login", (ctx, next) => {
  ctx.body = "登录成功"
})

app
  .use(
    session({
      store: redisStore(),
    })
  )
  .use((ctx, next) => {
    console.log(ctx)
    next()
  })
  .use(router.routes())
  .use(async (ctx, next) => {
    ctx.session.count = ctx.session.count || 0
    if (ctx.path === "/add") ctx.session.count++

    await next()

    ctx.body = ctx.session.count
  })

app.listen(8088, () => {
  console.log(`run appliction at http://127.0.0.1:8088`)
})
