const EventEmitter = require('events');
const myEmitter = new EventEmitter();

function sayHello(name){
    console.log(`Hello ${name}`);
}

const sayHello = () => {
	console.log('Hello User');
}

// Listener Function 2: sayHi
const sayHi = () => {
	console.log('Hi User');
}

// Listener Function 3: greetNewYear
const greetNewYear = () => {
	console.log('Happy New Year!');
}

// Subscribing to `userJoined` event
myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('userJoined', greetNewYear);

// Emiting the `userJoined` Event
myEmitter.emit('userJoined');


const greetBirthday = (name, newAge) => {
  // name = John
  // newAge = 24
  console.log(`Happy Birthday ${name}. You are now {newAge}!`);
}

// Listening for the birthdayEvent
myEmitter.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEmitter.emit('birthdayEvent', 'John', '24');


function myFunction1() {
    console.log('Hello from myFunction1!');
  }
  
  function myFunction2() {
    console.log('Hello from myFunction2!');
  }
  
  module.exports = {
    foo: 'bar',
    myFunction1: myFunction1,
    myFunction2: myFunction2,
    sayHello : sayHello()
  };