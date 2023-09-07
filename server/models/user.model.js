const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    }, 
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [{
        type: String
    }],
    admins: {
        type: Boolean,
        default: false
    }, 
    groups: [{
        type: Schema.Types.ObjectId,
        ref: "Group"
    }],
});

module.exports = mongoose.model("User", userSchema);