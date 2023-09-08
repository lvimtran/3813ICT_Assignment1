const express = require("express");
const router = express.Router();

const User = require('../models/user.model');
const Group = require('../models/group.model');

//Create a new chat user
router.post('/createProfile', async (req, res) => {
    try{
        const {username, email, password} = req.body;

        //Check if the username is unique
        const userChecking = await User.findOne({username});

        if (userChecking){
            return res.status(400).json({error: "Username already exists"})
        }
        
        const user = new User({
            username,
            email,
            password,
            role: ["User"],
        })

        await user.save();

        res.json({message: "Chat user profile created successfully"})
    } catch (error) {
        res.status(500).json({error: "Chat user profile creation failed"})
    }
})


//Join channel in a group when users are member in the existing group
router.post('/:userId/joinChannel/:channelId', async (req, res) => {
    try{
        const {userId, channelId} = req.params;

        const user = await User.findById(userId);
        const channel = await ChannelMergerNode.findById(channelId).populate("group");

        if (!user || !channel || !user.groups.includes(channel.group._id)){
            return res.status(403).json({error: "Access denied"})
        }

        channel.user.push(userId);
        await channel.save();

        res.json ({message: "User joined the channel"})
    } catch (error){
        res.status(500).json({error: "Joining the channel failed"})
    }
})


//Register an interest in a group to be added by the group admin
router.post('/:userId/registerInterest/:groupId', async (req, res) => {
    try{
        const {userId, groupId} = req.params;

        //Check user is a group member
        const user = await User.findById(userId);
        if (!user || user.groups.includes(groupId)){
            return res.status(400).json({error: "Invalid request"})
        }

        groups.user.push(userId);
        await group.save();

        res.json({message: "Adding interested user successfully"})
    } catch (error) {
        res.status(500).json({error: "Adding interested user failed"})
    }
})


//Leaving a group
router.post("/:userId/leaveGroup/:groupId", async (req, res) =>{
    try{
        const {userId, groupId} = req.params;

        const user = await User.findById(userId);

        if (!userId || !user.groups.includes(groupId)){
            return res.status(400).json({error: "Invalid request"})
        }

        user.groups.pull(groupId);
        await user.save()

        res.json({message: "User left the group"})
    } catch (error){
        res.status(500).json({error: "Leaving group failed"})
    }
})


//Delete a user profile
router.delete('/:userId/deleteProfile', async(req, res) => {
    try{
        const userId = req.params;

        if (!userId){
            return res.status(403).json({error: "Permission denied"})
        }

        const user = await User.findByIdAndRemove(userId);

        if (!user) {
            return res.status(404).json({error: "User not found"})
        }

        res.json({message: "User profile deleted."})
    } catch (error){
        res.status(500).json({error: "Deleting user failed"})
    }
})


//Promote a chat user to a Group Admin role
router.post("/:userId/promoteGroupAdmin", async (req, res) => {
    try{
        const userId = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        if (!req.user.admins) {
            return res.status(403).json({error: "Access denied"})
        }

        user.roles.push("Group Admin");
        await user.save();

        res.json({message: "User promoted to Group Admin"})
    } catch (error) {
        res.status(500).json({error: "Promoting user to Group Admin failed"})
    }
})


//Remove a user 
router.delete("/.userId", async(req, res) => {
    try{
        const userId = req.params;
        const user = await User.findById(userId);

        if (!user){
            return res.status(404).json({error: "User not found"})
        }

        if (!req.user.admins) {
            return res.status(403).json({error: "Access denied"})
        }

        await user.remove();

        res.json({message: "User removed successfully"});
    } catch (error) {
        res.status(500).json({message: "User removal failed"})
    }
});


//Upgrade a user to Super Admin
router.post('/:userId/upgradeSuperAdmin', async (req, res) => {
    try{
        const userId = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({error: "User not found"})
        }

        if (!req.user.admins) {
            return res.status(403).json({error: "Access denied"})
        }

        user.roles.push("Super Admin");
        user.admins = true;
        await user.save();

        res.json({message: "User upgraded to Super Admin"});
    } catch (error) {
        res.status(500).json({error: "Upgrading user to Super Admin failed"})
    }
});

module.exports = router;