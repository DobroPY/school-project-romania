
const db = require("../models");
const Module = db.modules;
const Op = db.Sequelize.Op;

// Create and Save a new Module
exports.create = (req, res) => {
    // Validate request
    // console.log(req.body);
    if (!req.query.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Module
    const module = {
      teacher: req.query.teacher,
      name: req.query.name,
    };
  
    // Save Module in the database
    Module.create(module)
    //.create(Module)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Module."
        });
      });
  };

  // Retrieve all Modules from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Module.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving modules."
        });
      });
  };

// Find a single Module with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Module.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Module with id=" + id
      });
    });
};

// Update a Module by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Module.update(req.query, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Module was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Module with id=${id}. Maybe Module was not found or req.query is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Module with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Module.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Module was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Module with id=${id}. Maybe Module was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Module with id=" + id
      });
    });
};