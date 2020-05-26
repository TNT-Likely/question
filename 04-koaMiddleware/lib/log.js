const path = require('path')
const fs = require('fs')

const LOG_TYPE = {
    WARNING: 'warning',
    ERROR: 'error',
    DEBUG: 'debug',
    TRACK: 'track',
    INFO: 'info'
}

const FILE_PATH = path.resolve(__dirname, './tmp.text')

const log = (type, msg) => {
    const time = new Date().toTimeString()
    const str = `${type} ${time} ${msg}`

    //TODO: 文件按日期分割，超出指定大小后分片，用流来进行io操作

    let content = ''
    if (fs.existsSync(FILE_PATH)) {
        content = fs.readFileSync(FILE_PATH).toString()
    }
    content +=`${str} \n`
    fs.writeFileSync(FILE_PATH, content)
}

module.exports = {
    log,
    LOG_TYPE
}
