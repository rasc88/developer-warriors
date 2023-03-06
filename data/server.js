const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const data = require("./users.json");
const port = 8081;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/users", (_req, res) => {
  res.jsonp(data.users);
});

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
