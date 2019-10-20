const fs = require('fs')
const path = require('path')

console.info('Adding new comment collection...')

const now = new Date()
const id = generateId(now)

const dbFolder = path.resolve(__dirname, '../database')
if (!fs.existsSync(dbFolder)) {
    fs.mkdirSync(dbFolder)
    fs.writeFileSync(path.resolve(dbFolder, '.gitkeep'))
    console.info(`Added database folder: ${dbFolder}`)
}

const newCommentCollection = path.resolve(dbFolder, `${id}.json`)
if (fs.existsSync(newCommentCollection)) {
    throw `Error: comment collection id=${id} already exist.`
}
fs.writeFileSync(newCommentCollection, JSON.stringify({
    id,
    createTime: now.getTime(),
    // TODO: 以后支持更多参数
    comments: [],
}))

// fs.existsSync(path.resolve)
console.log(fs.existsSync(path.resolve(__dirname, '../database')))

console.info(`Added new comment collection with id=${id}`)

/**
 * 生成 时间+8位随机字符 格式的id
 */
function generateId(now) {
    const charMap = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    return `${formatedNow(now)}${[0, 0, 0, 0, 0, 0, 0, 0].reduce((result) => {
        return result + charMap[Math.floor(Math.random() * charMap.length)]
    }, '')}`
}
function formatedNow(now) {
    return `${now.getFullYear()}${formatDigit(now.getMonth()+1)}${formatDigit(now.getDate())}${formatDigit(now.getHours())}${formatDigit(now.getMinutes())}${formatDigit(now.getSeconds())}`
}
function formatDigit(number) {
    if (typeof number !== 'number') {
        return number
    }
    return number < 10 ? `0${number}` : `${number}`
}
