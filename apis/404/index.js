const Router = require('koa-router')
const router = new Router()

router.get('/*', async (ctx) => {
    ctx.body = {
        code: '90001',
        message: 'API_NOT_FOUND',
        data: null,
    }
})

module.exports = router
