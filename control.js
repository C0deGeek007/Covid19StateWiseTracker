const request=require('request');
function statedata(state_name,callback){
const url ='https://api.covid19india.org/state_district_wise.json';
request({url:url,json:true}, function (error, response) {
  if(error){
      return console.log("error");
  }
  else{
    var a=[state_name]
    //  console.log(response.body[state_name]);//by this method we can access key of object which are given as string type by user
    callback(response.body[state_name]);
  }
});
//console.log("mjg,ig.hohh,kjgiug.igu");
}
module.exports=statedata