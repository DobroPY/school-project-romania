module.exports = app => {
    const classrooms = require("../controllers/classroom.controller.js");
  
    var router = require("express").Router();
  
    //Create a new Classroom
    router.post("/", classrooms.create);
  
    //Retrieve all Classrooms
    router.get("/", classrooms.findAll);
  
    // Retrieve a single Classroom with id
    router.get("/:id", classrooms.findOne);
  
    // Update a Classroom with id
    router.put("/:id", classrooms.update);
  
    // Delete a Classroom with id
    router.delete("/:id", classrooms.delete);
  
    app.use('/api/classrooms', router);
  };