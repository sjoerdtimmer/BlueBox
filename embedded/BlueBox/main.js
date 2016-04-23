/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var analogPin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var analogValue = analogPin0.read(); //read the value of the analog pin
console.log(analogValue); //write the value of the analog pin to the console

