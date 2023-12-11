module.exports = app => {
    const dummys = require("../controllers/dummy.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Dummy
    router.post("/", dummys.create);
  
    // Retrieve all Dummys
    router.get("/", dummys.findAll);

    // router.get('/version', dummys.version);
  
    // Retrieve all published Dummys
    router.get("/published", dummys.findAllPublished);
  
    // Retrieve a single Dummy with id
    router.get("/:id", dummys.findOne);
  
    // Update a Dummy with id
    router.put("/:id", dummys.update);
  
    // Delete a Dummy with id
    router.delete("/:id", dummys.delete);
  
    // Delete all Dummys
    router.delete("/", dummys.deleteAll);
  
    app.use('/api/dummys', router);
  };