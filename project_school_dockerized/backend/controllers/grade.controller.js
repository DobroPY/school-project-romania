const db = require("../models");
const Grade = db.grades;
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Grade
exports.create = async (req, res) => {
    let requestData = req.body || {};

    // Use req.query if req.body is empty and req.query is present
    if (!req.body || (Object.keys(req.body).length === 0 && req.query)) {
        requestData = req.query;
    }

    // Validate request
    if (!requestData.day && !requestData.month && !requestData.year && !requestData.email && !requestData.classroom && !requestData.module && !requestData.grade) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Find Student
    const findStudent = await Student.findOne({
        where: {
            email: requestData.email
        },
    });
    if (!findStudent) return res.sendStatus(404).send({ message: "Student not found" }); // Not Found

    // Create a Grade object
    const gradeRecord = {
        student: findStudent.id,
        day: requestData.day,
        month: requestData.month,
        year: requestData.year,
        classrooms: requestData.classroom,
        modules: requestData.module,
        grades: requestData.grade,
        reward: requestData.reward // Assuming 'rewar' was a typo
    };

    // Save Grade in the database
    Grade.create(gradeRecord)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Grade."
            });
        });
};


  // Retrieve all Grades from the database.
exports.findAll = (req, res) => {
    const day = req.query.day;
    const month = req.query.month;
    const year = req.query.year;

    var condition = day&&month&&year ? { day: { [Op.like]: `%${day&&month&&year}%` } } : null;
  
    Grade.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving grades."
        });
      });
  };

// Find a single Grade with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Grade.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Grade with id=" + id
      });
    });
};

// Update a Grade by the id in the request
exports.update = (req, res) => {
    const day = req.params.day;
    const month = req.params.month;
    const year = req.params.year;

    Grade.update(req.query, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Grade was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Grade with id=${id}. Maybe Grade was not found or req.query is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Grade with id=" + id
        });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Grade.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Grade was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Grade with id=${id}. Maybe Grade was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Grade with id=" + id
      });
    });
};