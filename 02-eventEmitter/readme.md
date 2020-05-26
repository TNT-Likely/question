# 题目

实现事件处理器 EventEmitter ，有如下功能

const event = new EventEmitter();

绑定事件

event.on(name, callback);

取消绑定

event.off(name);

触发事件

event.trigger(name, data);

# 测试方法

```
node test.js
```