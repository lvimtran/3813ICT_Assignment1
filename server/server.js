const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
const mongoose =require("mongoose");
mongoose.connect("mong")
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const groupRoutes = require('./routes/group.routes');
const channelRoutes = require('./routes/channel.routes');
const chatRoutes = require('./routes/chat.routes');
const registerRoutes = require('./routes/register.routes')

app.use('./api/auth', authRoutes);
app.use('./api/user', userRoutes);
app.use('./api/group', groupRoutes);
app.use('./api/channels', channelRoutes);
app.use('./api/chat', chatRoutes);
app.use('./api/register', registerRoutes)

io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("chat message", (message) => {
        io.emit("chat message", message);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected");
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})