const Koa = require('koa')
const app = new Koa()

const commentRoutes = require('./apis/comment')
const notFoundRoutes = require('./apis/404')

app.use(commentRoutes.routes())
app.use(notFoundRoutes.routes())

app.listen(3000, () => {
    console.log('listening at :3000')
})
