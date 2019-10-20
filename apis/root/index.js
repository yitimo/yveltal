const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
    ctx.body = {
        code: '200',
        message: 'Yveltal ready!',
        data: null,
    }
})

module.exports = router