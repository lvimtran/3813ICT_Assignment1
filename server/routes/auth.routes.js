const express = require("express");
const passport = require("passport");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

//User login route
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json({message: "Authentication successful", user: req.user});
});

//User logout route
router.get("/logout", (req, res) => {
    req.logout();
    res.json({message: "Logout successful"});
});

//Super Admin route
router.get('/superAdmin', authMiddleware.hasRole("Super Admin"), (req, res) => {
    res.json({message: "Welcome Super Admin."})
})

module.exports = router;