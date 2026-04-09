const EventEmitter = require('events');  

const myEmitter = new EventEmitter();  


myEmitter.on('greet', (name) => {  
  console.log(`Listener 1: Hello, ${name}!`);
});

myEmitter.on('greet', (name) => {  
  console.log(`Listener 2: Greetings, ${name}! (Multiple subscriptions)`);
});

// Register listener for 'start' event
myEmitter.on('start', (task) => {
  console.log(`Event triggered: Starting ${task} asynchronously.`);
});

// Emit custom events with data
myEmitter.emit('greet', 'Node.js Developer');  
myEmitter.emit('start', 'File Processing');  

console.log('Events demonstrate async non-blocking behavior.');  