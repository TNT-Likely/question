const EventEmitter = require('./lib')

const pubsub = new EventEmitter()

/** 事件枚举 */
const Event = {
    EVENT_A: 'A',
    EVENT_B: 'B'
}

const wrapCB = name => {
    return data => {
        console.log(`Receive Event ${name}, data ${data}`)
    }
}

pubsub.on(Event.EVENT_A, wrapCB(Event.EVENT_A))
pubsub.on(Event.EVENT_B, wrapCB(Event.EVENT_B))
pubsub.trigger(Event.EVENT_A, 'hello')
pubsub.trigger(Event.EVENT_B, 'hello')
pubsub.off(Event.EVENT_A)
pubsub.trigger(Event.EVENT_A, 'hello')
