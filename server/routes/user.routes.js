const express = require("express");
const router = express.Router();

const User = require('../models/user.model');
const Group = require('../models/group.model');

router.post("/:userId/promoteGroupAdmin", async (req, res) => {
    try{
        const userId = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        if (!req.user.superAdmin) {
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

        if (!req.user.superAdmin) {
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

        if (!req.user.superAdmin) {
            return res.status(403).json({error: "Access denied"})
        }

        user.roles.push("Super Admin");
        user.superAdmin = true;
        await user.save();

        res.json({message: "User upgraded to Super Admin"});
    } catch (error) {
        res.status(500).json({error: "Upgrading user to Super Admin failed"})
    }
});

module.exports = router;