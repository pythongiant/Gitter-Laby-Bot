
var request = require('request');
var room =""
var token =""


module.exports = app => {
  // Your code here
  app.log('Labyrinth Gitter bot')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue! I hope you have used the issue templates given here https://github.com/fossasia/labyrinth/tree/master/.github' })
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
  return context.github.issues.createComment(issueComment);
  });
  app.on('pull_request.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening making a PR. I hope you have read the guidelines at https://blog.fossasia.org/open-source-developer-guide-and-best-practices-at-fossasia/' })
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
    return context.github.issues.createComment(issueComment)
  })
}
