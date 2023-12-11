module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    //Create a new Classroom
    router.post("/", users.create);
  
    //Retrieve all Classrooms
    router.get("/", users.findAll);
  
    // Retrieve a single Classroom with id
    router.get("/:id", users.findOne);
  
    // Update a Classroom with id
    router.put("/:id", users.update);
  
    // Delete a Classroom with id
    router.delete("/:id", users.delete);
  
    app.use('/api/users', router);
  };