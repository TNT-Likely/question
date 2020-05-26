class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(name, callback) {
        if (!this.events[name]) this.events[name] = []
        typeof callback === 'function' && this.events[name].push(callback)
    }

    off(name) {
        this.events[name] = []
    }

    trigger(name, data) {
        if (!this.events[name] instanceof Array) return
        this.events[name].forEach(cb => {
            cb(data)
        })
    }
}

module.exports = EventEmitter