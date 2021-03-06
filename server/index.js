const express = require("express");
const app = express();

//sockets

const server = require("http").Server(app);
const socket = require("socket.io");
const bC = require("./controllers/blogController");

const massive = require("massive");
const session = require("express-session");
const uC = require("./controllers/userController");
const cC = require("./controllers/commentController");

require("dotenv").config();

const io = socket(server);

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  // db.init();
  console.log("Connceted to DB");
});

app.use(
  session({
    key: "username",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

//sockets

io.on("connection", function(socket) {
  console.log(socket.id, "a user connected");

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

app.post("/api/blogs", bC.postBlog);
app.get("/api/blogs", bC.getAllBlogs);
app.delete("/api/blogs/:post_id", bC.deletePost);
app.put("/api/blogs/:post_id/:post_text", bC.updatePost);

app.post("/api/comments", cC.addComment);
app.get("/api/comments", cC.getComments);

app.post("/api/login", uC.login);

// app.get("/api/logout", (req, res) => {
//   res.session.destory();
//   res.sendStatus(200);
// });

app.get("/api/user", (req, res) => {
  res.status(200).send(req.session.user);
});

app.post("/api/signup", uC.signup);

server.listen(SERVER_PORT || 4000, () => {
  console.log(`Rhianna says Work on ${SERVER_PORT}`);
});
