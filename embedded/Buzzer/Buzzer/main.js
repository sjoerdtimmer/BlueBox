/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/*
A simple node.js application intended to write data to Digital pins on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/

var B = 3975;
var mraa = require('mraa'); //require mraa

console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var myDigitalPin5 = new mraa.Gpio(5); //setup digital read on Digital pin #5 (D5)
myDigitalPin5.dir(mraa.DIR_OUT); //set the gpio direction to output

var myAnalogPin = new mraa.Aio(0);

var buzzerstate = false;

var lcd = require('jsupm_i2clcd');
    var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
    display.setCursor(0, 2);
    display.write('Temperature');
    display.setCursor(1, 6);
    display.write(' deg cel');

periodicActivity(); //call the periodicActivity function

function periodicActivity()
{
    useUpm();
    setTimeout(periodicActivity,1000); //call the indicated function after 1 second (1000 milliseconds)
}

function useUpm() {
    
        var a = myAnalogPin.read();
        var resistance = (1023 - a) * 10000 / a; //get the resistance of the sensor;
        var celsius_temperature = 1 / (Math.log(resistance / 10000) / B + 1 / 298.15) - 273.15;//convert to temperature via datasheet ;
        var fahrenheit_temperature = (celsius_temperature * (9 / 5)) + 32;
    
    display.setCursor(1, 4);
    display.write(Math.round(celsius_temperature)+" ");
    require('./rest.js')();
    postToSurvoy('temperature',Math.round(celsius_temperature));
    }
//function alarm() {
//    myDigitalPin5.write(buzzerstate?1:0); //set the digital pin to high (1)
//    buzzerstate=!buzzerstate;
//}


        