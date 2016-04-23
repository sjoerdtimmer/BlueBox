var rest = require('restler');
//var serverip = "10.10.107.48";
//var serverip = "10.10.105.204";
var serverip = "40.118.109.71";
var serverurl = "http://"+serverip+":8080/bluebox/servoy-service/rest_ws/bluebox/";
module.exports = function(){
    this.postToSurvoy = function(field, value) {
        var data = {headers: { "Content-Type": "application/json" }};
        data[field] = value;
            

//        console.log("staring request");
        rest.postJson(serverurl+field,data).on('success',function(data,resp){
            console.log(field+" data successfully POSTed: id="+data.id);
    //        console.log(data);
        }).on('fail',function(data,resp){
            console.error("POST error!");
        }).on('error',function(err,resp){
            console.error("POST failed!");
        })
//        console.log("req done");
    };
};