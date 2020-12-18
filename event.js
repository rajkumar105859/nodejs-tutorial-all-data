const events = require('events');  // import events module

const event = new events.EventEmitter(); // create object 

event.on('click' , (a)=>{
    console.log("Click event created and name is "+ a);
    event.emit('first' , 10 , 20);
})



const first_event = function(n1,n2){
    console.log("Multiplication is = " +n1 * n2 );
}
event.on('first', first_event);
event.emit('click' , 'Rajkumar');

