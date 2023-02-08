const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const port = process.env.PORT || 8000;
const registerLocationHandlers = require("./handlers/locationHandler");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
   cors: {
      origin: ["https://admin.socket.io"],
      credentials: true
   }
});

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res, next) {
   res.sendFile(__dirname + '/public/index.html');
 });

const onConnection = (socket) => {
   registerLocationHandlers(io, socket);
}

io.on("connection", onConnection);

instrument(io, {
   auth: false,
   mode: "development",
});
httpServer.listen(port,()=>{
   console.log('Server started on port: ' + port);
});