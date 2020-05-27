const koa = require('koa')
const koaBody = require('koa-body')
const babel = require('@babel/core')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default

const app = new koa()
app.use(koaBody())

app.use((ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Method', '*')
    ctx.set('Access-Control-Allow-Headers', '*')

    const { method, body } = ctx.request

    if (method.toLocaleLowerCase() === 'post') {
        const originCode1 = body.sourceLeft
        const originCode2 = body.sourceRight

        /**
         * 源码转为AST，这里借助了babel的力量
         */
        const AST1 = babel.parse(originCode1)
        const AST2 = babel.parse(originCode2)

        /**
         * 接下来是两个AST的比较
         * 思路(具体实现还不会):
         *      1: 遍历两个ast各节点，计算hash值
         *      2: 找出相似的节点数
         *      3: 相似度 = 相似节点数 / 源文件节点数
         */

        ctx.body = {
            sim: 99
        }

    } else {
        ctx.body = 'ok'
    }
})

app.listen(3000, () => {
    console.log('Server Start Success!')
})


