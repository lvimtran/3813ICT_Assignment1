const mongoose = require('mongoose');
//File importing the "Mongoose" library
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    //Create new group in the database, user must provide
    //a non-empty string
    name: {
        type: String,
        require: true
    },
    //Each ele is expected to be a MongoDB ObjectId and
    //associated with "User" Model
    //Store reference to "User" Model who are admins
    admins: [{
        type: Schema.Types.ObjectId, 
        ref: "User"
    }],
    channels: [{
        type: Schema.Types.ObjectId,
        ref: "Channel"
    }],
});

//Export this model named "Group" based on groupSchema
//Allows other file can use "Group" to interact with database
module.exports = mongoose.model("Group", groupSchema)


//Ban a user from a channel
router.post('./groupId/channels/:channelId/banUser', async (req, res) => {
    try {
        const userId = req.body;
        const channelId = req.params;

        const channel = await ChannelMergerNode.findById(channelId);

        if (!channel) {
            //status(404) sets the HTTP status of response to 404
            //It represents "Not Found" error
            return res.status(404).json({ error: "Channel not found"});
        }

        channel.bannedUsers.push(userId);
        await channel.save();

        res.json({message: "User banned from the channel"})
    } catch (error) {
        //status(500) sets the HTTP status code of the response
        //to 500. It represents an "Internal Server Error" 
        res.status(500).json({error: "Banning user from the channel failed"})
    }
})


//Report a user to Super Admins
router.post('/:groupId/channels/:channelId/reportUser', async (req, res) => {
    try {
        const userId = req.body;
        const channelId = req.params;

        const report = new Report({
            reportUserId: req.user.id,
            reportUserId: userId,
            channelId,
            groupId: req.params.groupId,
            description: req.body.description,
        });
        await report.save();

        res.json({message: "User reported to Super Admins"})
    } catch (error) {
        res.status(500).json({message: "Reporting user to Super Admins failed"})
    }
})