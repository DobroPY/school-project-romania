module.exports = app => {
    const reviews = require("../controllers/review.controller.js");
  
    var router = require("express").Router();
  
    //Create a new Review
    router.post("/", reviews.create);
  
    //Retrieve all Review
    router.get("/", reviews.findAll);
  
    // Retrieve a single Review with id
    router.get("/:id", reviews.findOne);
  
    // Update a Review with id
    router.put("/:id", reviews.update);
  
    // Delete a Review with id
    router.delete("/:id", reviews.delete);
  
    app.use('/api/reviews', router);
  };