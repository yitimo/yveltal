const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const rootRoutes = require('./apis/root')
const commentRoutes = require('./apis/comment')
const notFoundRoutes = require('./apis/404')

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
})
app.use(bodyParser())
app.use(rootRoutes.routes())
app.use(commentRoutes.routes())
app.use(notFoundRoutes.routes())

app.listen(3000, () => {
    console.log('listening at http://127.0.0.1:3000')
})
