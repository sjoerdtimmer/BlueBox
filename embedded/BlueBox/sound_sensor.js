var mraa = require('mraa');

var sound = new mraa.Aio(3);     // set up analog input on analog pin #3

var soundValue;
function timeout() {
    setTimeout(function(){
        soundValue = sound.read();   // read the value of the analog pin
    console.log(soundValue);         // write the value to the console for debugging
    timeout();
    }, 300);
}

timeout();

