const http = require('../../utils/http')
const utils = require('../../utils')
const wechatConfig = require('../../utils/consts').WECHAT_MP
const fs = require('fs')
const path = require('path')

module.exports = {
  async code2Session(code) {
    const {
      errcode,
      errmsg,
      openid,
      session_key,
      unionid,
    } = await http.get({
      url: `${
        wechatConfig.API.CODE_TO_SESSION
      }?appid=${
        wechatConfig.AppID
      }&secret=${
        wechatConfig.AppSecret
      }&js_code=${
        code
      }&grant_type=authorization_code`
    })
    if (session_key && session_key.length) {
      return {
        openid,
        session_key,
        unionid,
      }
    } else {
      throw `${errcode}:${errmsg}`
    }
  },
  async authorize({
    openid,
    session_key,
    unionid
  }) {
    const now = new Date()
    const authData = {
      openid,
      token: session_key,
      unionid,
      updateTime: now.getTime(),
    }
    const file = path.resolve(__dirname, `../../database/auth.json`)
    const authDB = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file).toString()) : []
    const index = authDB.findIndex((e) => e.openid === authData.openid)
    if (index < 0) {
      authDB.push({
        ...authData,
        id: utils.generateId(now),
      })
    } else {
      authDB[index].token = session_key
      authDB[index].updateTime = authData.updateTime
    }
    fs.writeFileSync(file, JSON.stringify(authDB))
    return {
      openid: openid,
      token: session_key,
      unionid: unionid,
      updateTime: authData.updateTime,
    }
  },
  async check({
    token,
  }) {
    const file = path.resolve(__dirname, `../../database/auth.json`)
    if (!fs.existsSync(file)) {
        throw new Error('COLLECTION_NOTFOUND')
    }
    const authDB = JSON.parse(fs.readFileSync(file).toString())
    const index = authDB.findIndex((e) => e.token === token)
    return authDB[index]
  },
}
