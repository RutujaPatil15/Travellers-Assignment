module.exports = (app) => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();
    // Create a new users
    router.post("/createuser", users.createuserdata);
    // Retrieve all users
    router.get("/getdata", users.getallusersdata);
    app.use("/api/users", router);
};