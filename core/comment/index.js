const get = require('./get')
const add = require('./add')
const entry = require('./entry')

module.exports = {
    /**
     * 获取当前集合的所有评论
     */
    get,
    /**
     * 添加新评论
     */
    add,
    /**
     * 获取web上用于进入指定文章评论的小程序码
     */
    entry,
}
