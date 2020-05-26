const { LOG_TYPE, log } = require('./log')

const logger = (ctx, next) => {
    const ip = ctx.ip
    log(LOG_TYPE.INFO, ip)
    next()
}

module.exports = logger