const { EventEmitter } = require('events');

const demoEvent = new EventEmitter();

demoEvent.on('run', () => {
    console.log('run');
});

setTimeout(() => {
    console.log('timeout');
    
Promise.resolve().then(() => {
    console.log('promise');
});
}, 10);

setTimeout(() => {
    console.log('timeout2');
    
Promise.resolve().then(() => {
    console.log('promise');
});
}, 10);

setImmediate(() => {
    console.log('immediate');
    Promise.resolve().then(() => {
        console.log('promise');
    });
});

setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

Promise.resolve().then(() => {
    console.log('promise');
});

demoEvent.emit('run');

// process.on('uncaughtException')
// process.on('unhandledRejection')
// process.on('uncaughtExceptionMonitor')