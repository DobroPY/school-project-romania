const db = require("../models");
const Absence = db.absences;
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Absence
exports.create = async (req, res) => {
  let requestData = req.body || {};

  // Use req.query if req.body is empty and req.query is present
  if (!req.body || (Object.keys(req.body).length === 0 && req.query)) {
      requestData = req.query;
  }

  // Validate request
  if (!requestData.day && !requestData.month && !requestData.year && !requestData.email && !requestData.classroom && !requestData.module) {
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
  if (!findStudent) return res.sendStatus(409); // Conflict

  const absence = {
      student: findStudent.id,
      day: requestData.day,
      month: requestData.month,
      year: requestData.year,
      classrooms: requestData.classroom,
      modules: requestData.module
  };

  // Save Absence in the database
  Absence.create(absence)
      .then(data => {
          res.status(201).send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Absence."
          });
      });
};


  // Retrieve all Absences from the database.
exports.findAll = (req, res) => {
    const day = req.query.day;
    const month = req.query.month;
    const year = req.query.year;

    var condition = day&&month&&year ? { day: { [Op.like]: `%${day&&month&&year}%` } } : null;
  
    Absence.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving absences."
        });
      });
  };

// Find a single Absence with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Absence.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Absence with id=" + id
      });
    });
};

// Update a Absence by the id in the request
exports.update = (req, res) => {
    const day = req.params.day;
    const month = req.params.month;
    const year = req.params.year;

    Absence.update(req.query, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Absence was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Absence with id=${id}. Maybe Absence was not found or req.query is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Absence with id=" + id
        });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Absence.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Absence was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Absence with id=${id}. Maybe Absence was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Absence with id=" + id
      });
    });
};