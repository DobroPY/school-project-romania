const db = require("../models");
const Director = db.directors;
const Op = db.Sequelize.Op;

// Create and Save a new Director
exports.create = (req, res) => {
    // Validate request
    // console.log(req.body);
    if (!req.query.email) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Director
    const director = {
      email: req.query.email,
      rank: req.query.rank,
      status: req.query.status ? req.query.status : false
    };
  
    // Save Director in the database
    Director.create(director)
    //.create(Director)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Director."
        });
      });
  };

  // Retrieve all Directors from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    Director.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving directors."
        });
      });
  };

// Find a single Director with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Director.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Director with id=" + id
      });
    });
};

// Update a Director by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Director.update(req.query, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Director was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Director with id=${id}. Maybe Director was not found or req.query is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Director with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Director.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Director was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Director with id=${id}. Maybe Director was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Director with id=" + id
      });
    });
};