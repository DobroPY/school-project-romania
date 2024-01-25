const db = require("../models");
const Classroom = db.classrooms;
const Op = db.Sequelize.Op;

// Create and Save a new Classroom
exports.create = async (req, res) => {
  let requestData = req.body || {};

  // Use req.query if req.body is empty and req.query is present
  if (!req.body || (Object.keys(req.body).length === 0 && req.query)) {
      requestData = req.query;
  }

  // Validate request
  if (!requestData.name) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
  }

  // Create a Classroom
  const classroom = {
      teacher: requestData.teacher,
      name: requestData.name,
      seats: requestData.seats
  };

  // Save Classroom in the database
  Classroom.create(classroom)
      .then(data => {
          res.status(201).send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Classroom."
          });
      });
};


  // Retrieve all Classrooms from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Classroom.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classrooms."
        });
      });
  };

// Find a single Classroom with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Classroom.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Classroom with id=" + id
      });
    });
};

// Update a Classroom by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Classroom.update(req.query, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Classroom was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Classroom with id=${id}. Maybe Classroom was not found or req.query is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Classroom with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Classroom.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Classroom was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Classroom with id=${id}. Maybe Classroom was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Classroom with id=" + id
      });
    });
};