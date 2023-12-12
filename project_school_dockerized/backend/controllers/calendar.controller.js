const db = require("../models");
const Calendar = db.calendars;
const Op = db.Sequelize.Op;

// Create and Save a new Calendar
exports.create = (req, res) => {
    // Validate request
    
    console.log(req.query.month);
    console.log(req.query.year);
    console.log(req.queryclassrooms);
    if (!req.query.month && !req.query.year&&!req.query.classrooms) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a Calendar

    const calendar = {
      month: req.query.month,
      year: req.query.year,
      classrooms: req.query.classrooms,
    };
  
    // Save Calendar in the database
    Calendar.create(calendar)
    //.create(Calendar)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Calendar."
        });
      });
  };

  // Retrieve all Calendars from the database.
exports.findAll = (req, res) => {
    const day = req.query.day;
    const month = req.query.month;
    const year = req.query.year;

    var condition = day&&month&&year ? { day: { [Op.like]: `%${day&&month&&year}%` } } : null;
  
    Calendar.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving calendars."
        });
      });
  };

// Find a single Calendar with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Calendar.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Calendar with id=" + id
      });
    });
};

// Update a Calendar by the id in the request
exports.update = (req, res) => {
    const day = req.params.day;
    const month = req.params.month;
    const year = req.params.year;

    Calendar.update(req.query, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Calendar was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Calendar with id=${id}. Maybe Calendar was not found or req.query is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Calendar with id=" + id
        });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Calendar.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Calendar was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Calendar with id=${id}. Maybe Calendar was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Calendar with id=" + id
      });
    });
};