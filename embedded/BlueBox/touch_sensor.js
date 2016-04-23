var mraa = require('mraa');
var button = new mraa.Gpio(5);     // set up digital read on digital pin #5
button.dir(mraa.DIR_IN);           // set the GPIO direction to input
var buttonState;

function timeout() {
    setTimeout(function(){
        buttonState = button.read();   // read the value of the digital pin
        console.log(buttonState); 
        timeout();
    }, 1000);
}

timeout();
