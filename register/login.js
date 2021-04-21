"use strict";
var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();
router.post('/login', (function (ctx) {
    console.log(ctx);
}));
app.use(router.routes());
app.listen('1120');
