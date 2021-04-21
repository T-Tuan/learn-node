import Router = require('koa-router')
import { query } from '../common'

const router: Router = new Router()

router.post('login', (ctx): void => {
  const postdata = ctx.request.body
  query(`select id,name,password from userTable where id=`)
})
router.get('exit', ctx => {
  ctx.session = null
})

export default router