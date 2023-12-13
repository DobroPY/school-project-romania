module.exports = app => {
    const calendars = require("../controllers/calendar.controller.js");
  
    var router = require("express").Router();
  
    //Create a new Calendar
    router.post("/", calendars.create);
  
    //Retrieve all Calendars
    router.get("/", calendars.findAll);
  
    // Retrieve a single Calendar with id
    router.get("/:id", calendars.findOne);
  
    // Update a Calendar with id
    router.put("/:id", calendars.update);
  
    // Delete a Calendar with id
    router.delete("/:id", calendars.delete);
  
    app.use('/api/calendars', router);
  };