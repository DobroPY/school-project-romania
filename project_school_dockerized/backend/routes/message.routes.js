module.exports = app => {
    const messages = require("../controllers/message.controller.js");
  
    var router = require("express").Router();
  
    // //Create a new Absence
    router.post("/msg", messages.send);

    router.get("/get/chat/msg/:user1Id/:user2Id", messages.send);
  
    // //Retrieve all Absences
    // router.get("/", absences.findAll);
  
    // // Retrieve a single Absence with id
    // router.get("/:id", absences.findOne);
  
    // // Update a Absence with id
    // router.put("/:id", absences.update);
  
    // // Delete a Absence with id
    // router.delete("/:id", absences.delete);
  
    app.use('/api/messages', router);
  };