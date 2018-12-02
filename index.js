
var request = require('request');
var room =""
var token =""


module.exports = app => {
  // Your code here
  app.log('Labyrinth Gitter bot')

  app.on('issues.opened', async context => {
    
    request({
      url : "https://api.gitter.im/v1/rooms/"+room+"/chatMessages?access_token="+token,
      method: "POST",
      body:{
        "text":"A new Issue https://github.com/fossasia/labyrinth/issues/"+ issueComment.number +" was opened"
      
      },function (error, resp, body){
        console.log(resp);
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json'
      },
      json: true,
    });
  
  });
  app.on('pull_request.opened', async context => {
   
    request({
      url : "https://api.gitter.im/v1/rooms/"+room+"/chatMessages?access_token="+token,
      method: "POST",
      body:{
        "text":"A new PR https://github.com/fossasia/labyrinth/pull/"+ issueComment.number +" was opened"
      
      },function (error, resp, body){
        console.log(resp);
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json'
      },
      json: true,
    });
    
  })
}
