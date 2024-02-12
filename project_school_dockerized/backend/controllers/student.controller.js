const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = async (req, res) => {
    // Validate request

    let requestData = req.body || {}; // Default to req.body
    let source = 'body';

    // Use req.query if req.body is empty and req.query is present
    if (!req.body || (Object.keys(req.body).length === 0 && req.query)) {
        requestData = req.query;
        source = 'query';
    }

    // Check if required fields are present
    if (!requestData.email && !requestData.first_name && !requestData.middle_name && !requestData.middle_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Check for duplicate Student
    const duplicate = await Student.findOne({
        where: { email: requestData.email },
    });

    if (duplicate) return res.sendStatus(409); // Conflict

    // Create a Student
    const student = {
        first_name: requestData.first_name,
        middle_name: requestData.middle_name,
        last_name: requestData.middle_name,
        email: requestData.email,
        class: requestData.class,
        rank: requestData.rank,
        status: requestData.status !== undefined ? requestData.status : false
    };

    // Save Student in the database
    Student.create(student)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Student."
            });
        });
  };

  // Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    Student.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
  };

// Find a single Student with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Student.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Student with id=" + id
      });
    });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Student.update(req.query, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.query is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Student.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });
};