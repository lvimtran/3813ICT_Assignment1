const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    name: {
        type: String, 
        require: true
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },
    bannedUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Channel", channelSchema)