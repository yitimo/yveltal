/* eslint-disable no-unreachable */
const Router = require('koa-router')
const authCore = require('../../core/auth')

const router = new Router()

router.post('/auth/check', async (ctx) => {
  try {
    const res = await authCore.check({
      token: ctx.request.body.token,
    })
    ctx.body = {
      code: '200',
      message: 'success',
      data: res,
    }
  } catch (e) {
    ctx.body = {
      code: '99999',
      message: e.message || e || '请求失败',
      data: null,
    }
  }
})

router.post('/auth/:code', async (ctx) => {
  // ctx.body = {
  //   code: '200',
  //   message: 'success',
  //   data: {
  //     openid: 'o968443Uyv5-Ou2kbo_hSNsp3kp0',
  //     updateTime: 1572279545703,
  //     token: 'coDIukpWTEkb7+2trtj4xg==',
  //   },
  // }
  // return
  try {
    const {
      code,
    } = ctx.params
    const {
      openid,
      session_key,
      unionid,
    } = await authCore.code2Session(code)
    const res = await authCore.authorize({openid, session_key, unionid})
    ctx.body = {
      code: '200',
      message: 'success',
      data: res,
    }
  } catch (e) {
    ctx.body = {
      code: '99999',
      message: e.message || e || '请求失败',
      data: null,
    }
  }
})

module.exports = router
