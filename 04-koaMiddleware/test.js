const koa =  require('koa')
const logger = require('./lib/index')

const app = new koa()

app.use(logger)

app.use((ctx, next) => {
    ctx.body = {
        msg: 'ok'
    }
})

app.listen(3000, () => {
    console.log('Server Start Success!')
})