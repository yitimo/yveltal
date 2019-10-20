const Router = require('koa-router')
const router = new Router()

router.get('/comment/get', async (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'hello, world!!!'
    }
})

router.post('/comment/add', async (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'hello, world!'
    }
})

module.exports = router