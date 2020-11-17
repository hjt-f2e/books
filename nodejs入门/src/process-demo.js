const env = process.env;
console.log(env);

const argv = process.argv;
console.log(argv);
// [
//     '/usr/local/Cellar/node/13.11.0/bin/node',
//     '/Users/denglei/Workspace/node_learn/process-demo.js'
// ]

process.stdout.write('process-demo.js \n');
process.stderr.write('process-demo1.js \n');

process.nextTick(() => {
    console.log('nextTick');
});

process.on('uncaughtException', e => {
    console.error(e);
    process.exit(0);
});

process.on('unhandledRejection', e => {
    console.error(e);
    process.exit(0);
});