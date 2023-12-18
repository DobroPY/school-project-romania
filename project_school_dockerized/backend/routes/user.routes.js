module.exports = app => {
    const users = require("../controllers/user.controller.js");

    const ROLES_LIST = require("../config/roles.js");
    const verifyRoles = require("../middleware/verifyRoles.js");
  
    var router = require("express").Router();
  
    //Create a new User
    router.post("/", users.create);
  
    //Retrieve all Users
    router.get("/",verifyRoles(ROLES_LIST.Director, ROLES_LIST["System Admin"]), users.findAll);
  
    // Retrieve a single Users with id
    router.get("/:id", users.findOne);
  
    // Update a User with id
    router.put("/:id", users.update);
  
    // Delete a User with id
    router.delete("/:id", users.delete);
  
    app.use('/api/users', router);
  };