var http = require("http");
var state = require("./state.js").users;
let server = http.createServer(messageReceived);

server.listen(8080);

function messageReceived(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.method === "GET" && req.url === "/users") {
    let usersJSON = JSON.stringify(state);
    res.write(usersJSON);
  }
  if (req.method === "GET" && req.url === "/users/1") {
    let user = state.find(user => user["_id"] === 1);
    res.write(JSON.stringify(user));
  } else {
    res.write("your mom");
  }
  res.end();
}
