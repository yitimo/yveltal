const Router = require('koa-router')
const commentCore = require('../../core/comment')

const router = new Router()

router.get('/comment/get/:id', async (ctx) => {
    try {
        const {
            id,
        } = ctx.params
        const data = await commentCore.get(id)
        ctx.body = {
            code: '200',
            message: 'success',
            data,
        }
    } catch (e) {
        ctx.body = {
            code: '99999',
            message: e.message || '请求失败',
            data: null,
        }
    }
})

router.post('/comment/add/:id', async (ctx) => {
    try {
        const {
            id,
        } = ctx.params
        const data = await commentCore.add(id, ctx.request.body)
        ctx.body = {
            code: '200',
            message: 'success',
            data,
        }
    } catch (e) {
        ctx.body = {
            code: '99999',
            message: e.message || '请求失败',
            data: null,
        }
    }
})

module.exports = router