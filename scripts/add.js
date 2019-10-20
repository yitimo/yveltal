const fs = require('fs')
const path = require('path')
const utils = require('../utils')

console.info('Adding new comment collection...')

const now = new Date()
const id = utils.generateId(now)

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
