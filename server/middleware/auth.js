const passport = require("passport");

//Check the user is authenticated
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    return res.status(401).json({message: "Authentication required"})
}

//Check the user has a role
exports.hasRole = (role) => (req, res, next) => {
    if (req.isAuthenticated() && req.user && req.user.roles.includes(role)){
        return next();
    }
    return res.status(403).json({message: "Access denied"})
}