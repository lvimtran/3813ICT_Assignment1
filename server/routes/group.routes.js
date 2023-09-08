//Import express and create Router to define routes
const express = require ('express');
const router = express.Router();

const Group = require('../models/group.model')
const User = require("../models/user.model");
const Channel = require("../models/channel.model")

//Create a group
router.post('/', async (req, res) => {
    //Using try to block the code, if there's an error, "catch"
    //will handle it
    try{
        const name = req.body;
        const group = new Group(name);
        //Ensure the group is saved before proceeding to the message
        await group.save();

        res.json({message: "Group created successfully"});
    } catch (error) {
        res.status(500).json({ error: "Group creation failed"})
    }
});

//Add a user to a group
//:groupId represents a params that can be accessed using req.params.groupId
router.post('/:groupId/addUser', async (req, res) => {
    try{
        //Extract "userId" from the req.body and "groupId" from req.param.groupId
        const userId = req.body;
        const groupId = req.params;

        const group = await Group.findById(groupId);

        if (!group) {
            return res.status(404).json({ error: "Group not found"});
        }

        //Add userId to the "users" array of the group
        group.users.push(userId);
        await group.save();

        res.json({message: "User added to the group"})
    } catch (error) {
        res.status(500).json({ error: "Adding user to the group failed"})
    }
});

//Create a new channel within a group
router.post('/:groupId/createChannel', async (req,res) => {
    try{
        const name = req.body;
        const groupId = req.params;

        const group = await Group.findById(groupId);

        if(!group){
            return res.status(404).json({error: "Group not found"});
        }

        const channel = new Channel({name, group: groupId})
        await channel.save();

        // group.channel.push(channel._id);
        // await group.save();

        res.json({message: "Channel created successfully"})
    } catch (error) {
        res.status(500).json({error: "Channel creation failed"})
    }
})