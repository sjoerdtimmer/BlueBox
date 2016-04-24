var mraa = require('mraa');
var analogPin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var rest;
//require('./rest.js')();

exports.init = function(restobj){
	rest = restobj;
}

exports.measure = function(){
    rest.postToSurvoy('battery',5.0*analogPin0.read()/1024.0);
}


//exports.measure
//var analogValue = analogPin0.read();