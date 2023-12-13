module.exports = app => {
    const absences = require("../controllers/absence.controller.js");
  
    var router = require("express").Router();
  
    //Create a new Absence
    router.post("/", absences.create);
  
    //Retrieve all Absences
    router.get("/", absences.findAll);
  
    // Retrieve a single Absence with id
    router.get("/:id", absences.findOne);
  
    // Update a Absence with id
    router.put("/:id", absences.update);
  
    // Delete a Absence with id
    router.delete("/:id", absences.delete);
  
    app.use('/api/absences', router);
  };