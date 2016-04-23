var digitalAccelerometer;
var x, y, z;
var ax, ay, az;
var myDigitalAccelerometer;
var outputStr;

exports.init = function() {

    digitalAccelerometer = require('jsupm_mma7660');

    // Instantiate an MMA7660 on I2C bus 0
    myDigitalAccelerometer = new digitalAccelerometer.MMA7660(
                                     digitalAccelerometer.MMA7660_I2C_BUS, 
                                     digitalAccelerometer.MMA7660_DEFAULT_I2C_ADDR);

    // place device in standby mode so we can write registers
    myDigitalAccelerometer.setModeStandby();

    // enable 64 samples per second
    myDigitalAccelerometer.setSampleRate(digitalAccelerometer.MMA7660.AUTOSLEEP_64);

    // place device into active mode
    myDigitalAccelerometer.setModeActive();

    
    x = digitalAccelerometer.new_intp();
    y = digitalAccelerometer.new_intp();
    z = digitalAccelerometer.new_intp();


    ax = digitalAccelerometer.new_floatp();
    ay = digitalAccelerometer.new_floatp();
    az = digitalAccelerometer.new_floatp();
};

exports.measure = function(){
    myDigitalAccelerometer.getRawValues(x, y, z);
	outputStr = "Raw values: x = " + digitalAccelerometer.intp_value(x) +
	" y = " + digitalAccelerometer.intp_value(y) +
	" z = " + digitalAccelerometer.intp_value(z);
	console.log(outputStr);
    

	myDigitalAccelerometer.getAcceleration(ax, ay, az);
	outputStr = "Acceleration: x = " 
		+ roundNum(digitalAccelerometer.floatp_value(ax), 6)
		+ "g y = " + roundNum(digitalAccelerometer.floatp_value(ay), 6) 
		+ "g z = " + roundNum(digitalAccelerometer.floatp_value(az), 6) + "g";
	console.log(outputStr);
}

function roundNum(num, decimalPlaces)
{
	var extraNum = (1 / (Math.pow(10, decimalPlaces) * 1000));
	return (Math.round((num + extraNum) 
		* (Math.pow(10, decimalPlaces))) / Math.pow(10, decimalPlaces));
}