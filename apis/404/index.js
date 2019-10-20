const Router = require('koa-router')
const router = new Router()

router.get('/*', async (ctx) => {
    ctx.body = {
        status: 'not found',
        message: 'hello, world!!!'
    }
})

module.exports = router
