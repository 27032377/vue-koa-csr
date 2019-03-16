const Koa = require('koa');
const KoaJson = require('koa-json');
const KoaRouter = require('koa-router');
const KoaParser = require('koa-bodyparser');
const KoaStatic = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
const fs = require('fs');

const app = new Koa();

const router = new KoaRouter();

const staticPath = './web/dist';
app.use(KoaStatic(path.join(__dirname, staticPath)));

router.get('/xxx', async (ctx) => {
    console.log(ctx.url);
});

app.use(router.routes()).use(router.allowedMethods());

app.use(KoaJson);
app.use(KoaParser);

app.listen(1001, () => {
    console.log('Server Started ...');
});