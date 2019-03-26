const Koa = require('koa');
const KoaJson = require('koa-json');
const KoaRouter = require('koa-router');
const KoaParser = require('koa-bodyparser');
const KoaStatic = require('koa-static');
const path = require('path');
const fs = require('fs');
const History = require('./src/middleware/koa2-connect-history-api-fallback')

const app = new Koa();

const router = new KoaRouter();

app.use(History());

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