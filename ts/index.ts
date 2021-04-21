
import * as koa from 'koa'
const Koa = require('koa');
import Router = require('koa-router')
import cors = require("koa2-cors");
import session = require('koa-session');
import bodyparser = require('koa-bodyparser');

const port: number | string = 1020
const app: koa = new Koa()
const router: Router = new Router()

app.keys = ['some secret hurr'];   /*cookie的签名*/

interface CONFIG {
  key: string;
  maxAge: number;
  overwrite: boolean;
  httpOnly: boolean;
  signed: boolean;
  rolling: boolean;
  renew: boolean;
}

const CONFIG: CONFIG = {
  key: 'What is key', /** 默认 */
  maxAge: 60 * 60000,  /*  cookie的过期时间        【需要修改】  */
  overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
  httpOnly: true, /**  true表示只有服务器端可以获取cookie */
  signed: true, /** 默认 签名 */
  rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
  renew: false, /** (boolean) renew session when session is nearly expired      【需要修改】*/
};

router.get('/', (ctx: any): void => {
  if (!!ctx.session.userinfo) {
    ctx.body = '已登录'
  } else {
    ctx.body = '未登录'
  }
})

router.get('/login', (ctx: any): void => {
  ctx.session.userinfo = {
    user: 'zhansan',
    passWord: '123456++'
  };
  ctx.body = '登录成功'
})

app
  .use(bodyparser())
  .use(cors())
  .use(session(CONFIG, app))
  .use(router.routes())

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
})
