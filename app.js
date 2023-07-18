const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRoutes } = require("./src/routes/userRoutes");
const { likeRoutes } = require("./src/routes/likeRoutes");
const { matchRoutes } = require("./src/routes/matchRoutes");
const { chatRoutes } = require("./src/routes/chatRoutes");
const { http } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = require("http").createServer(app);
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    /* origin: "https://tinderpet23.netlify.app" */
    origin: "",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });
});

const { PORT } = process.env;

const port = PORT || 3000;

app.use("/users", userRoutes);
app.use("/like", likeRoutes);
app.use("/matchs", matchRoutes);
app.use("/chats", chatRoutes);

app.use((req, res) =>
  res.status(404).send({
    status: "error",
    message: "Not Found",
  })
);

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
