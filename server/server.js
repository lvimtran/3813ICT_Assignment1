const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const groupRoutes = require('./routes/group.routes');
const channelRoutes = require('./routes/channel.routes');
const chatRoutes = require('./routes/chat.routes');

app.use('./api/auth', authRoutes);
app.use('./api/user', userRoutes);
app.use('./api/group', groupRoutes);
app.use('./api/channels', channelRoutes);
app.use('./api/chat', chatRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})