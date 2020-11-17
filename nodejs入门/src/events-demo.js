const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('my-event', () => {
    console.log('my-event');
});

ee.emit('my-event');