const fs = require('fs')
const path = require('path')
const utils = require('../../utils')

module.exports = async function (id, comment = {}) {
    const file = path.resolve(__dirname, `../../database/${id}.json`)
    if (!fs.existsSync(file)) {
        throw new Error('COLLECTION_NOTFOUND')
    }
    const collection = JSON.parse(fs.readFileSync(file).toString())
    const now = new Date()
    const newId = utils.generateId(now)
    if (!comment.content) {
        throw new Error('EMPTY_CONTENT')
    }
    if (!checkCreateTime(collection.comments, now.getTime())) {
        throw new Error('RATE_LIMITED')
    }
    collection.comments.push({
        id: newId,
        content: comment.content,
        parent: comment.parent,
        createTime: now.getTime(),
    })
    fs.writeFileSync(file, JSON.stringify(collection))
    return newId
}

/**
 * 保证评论发表时间间隔超过一分钟
 */
function checkCreateTime(comments, now) {
    return now - comments.reduce((result, next) => Math.max(result, next.createTime), 0) > 60000
}
