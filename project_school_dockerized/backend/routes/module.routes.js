module.exports = app => {
    const modules = require("../controllers/module.controller.js");
  
    var router = require("express").Router();
  
    //Create a new Module
    router.post("/", modules.create);
  
    //Retrieve all Modules
    router.get("/", modules.findAll);
  
    // Retrieve a single Module with id
    router.get("/:id", modules.findOne);
  
    // Update a Module with id
    router.put("/:id", modules.update);
  
    // Delete a Module with id
    router.delete("/:id", modules.delete);
  
    app.use('/api/modules', router);
  };