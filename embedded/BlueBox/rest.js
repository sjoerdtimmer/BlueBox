var rest = require('restler');
module.exports = function(){
    this.postToSurvoy = function(field, value) {
        var data = {
            data: { field: value },
            headers: { "Content-Type": "application/json" }
        };

        console.log("staring request");
        rest.postJson("http://10.10.105.204:8080/servoy-service/rest_ws/bluebox/"+field,data).on('success',function(data,resp){
            console.log(field+" data successfully POSTed: id="+resp.id);
    //        console.log(data);
        }).on('fail',function(data,resp){
            console.error("POST error!");
        }).on('error',function(err,resp){
            console.error("POST failed!");
        })
        console.log("req done");
    };
};