module.exports = app => {
    const teachers = require("../controllers/teacher.controller.js");
  
    var router = require("express").Router();
  
    //Create a new Teacher
    router.post("/", teachers.create);
  
    //Retrieve all Teachers
    router.get("/", teachers.findAll);
  
    // Retrieve a single Teacher with id
    router.get("/:id", teachers.findOne);
  
    // Update a Teacher with id
    router.put("/:id", teachers.update);
  
    // Delete a Teacher with id
    router.delete("/:id", teachers.delete);
  
    app.use('/api/teachers', router);
  };