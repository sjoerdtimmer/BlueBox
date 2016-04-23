var request = require('request');
//var rest = require('restler');
//var serverip = "10.10.107.48";
//var serverip = "10.10.105.204";
var serverip = "40.118.109.71";
var serverurl = "http://"+serverip+":8080/servoy-service/rest_ws/bluebox/";
module.exports = function(){
    
    this.postToSurvoy = function(field, value) {
//        var data = {headers: { "Content-Type": "application/json" }};
//        data[field] = value;

        var options = {
          uri: serverurl+field,
          method: 'POST',
          json: {
            field: value
          }
        };

        request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body.id) // Print the shortened url.
          }
        });

//        console.log("staring request");
//        rest.postJson(serverurl+field,data).on('success',function(data,resp){
//            console.log(field+" data successfully POSTed: id="+data.id);
//    //        console.log(data);
//        }).on('fail',function(data,resp){
//            console.error("POST error!");
//        }).on('error',function(err,resp){
//            console.error("POST failed!");
//        })
//        console.log("req done");
    };
    this.postAccelToSurvoy = function(x,y,z,ax,ay,az) {
//        var data = {headers: { "Content-Type": "application/json" }};
//        data['x'] = x;
//        data['y'] = y;
//        data['z'] = z;
//        data['ax'] = ax;
//        data['ay'] = ay;
//        data['az'] = az;
            
        var options = {
          uri: serverurl+"accelerometer",
          method: 'POST',
          json: {
            'x': x,
            'y': y,
            'z': z,
            'ax': ax,
            'ay': ay,
            'az': az
          }
        };

        request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
           
              
              console.log(body.id) // Print the shortened url.
          }
        });
//        console.log("staring request");
//        rest.postJson(serverurl+"accelerometer",data).on('success',function(data,resp){
////            console.log(field+" data successfully POSTed: id="+data.id);
//    //        console.log(data);
//        }).on('fail',function(data,resp){
//            console.error("Accelerometer POST error!");
//        }).on('error',function(err,resp){
//            console.error("Accelerometer POST failed!");
//        })
//        console.log("req done");
    };
};