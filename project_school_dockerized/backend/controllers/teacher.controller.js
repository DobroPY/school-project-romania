const db = require("../models");
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

// Create and Save a new Teacher
exports.create = async (req, res) => {
    // Validate request
    // console.log(req.body);
    if (!req.query.email&&!req.query.firstName&&!req.query.middleName&&!req.query.lastName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    const duplicate = await Teacher.findOne({
        where: {
            email: req.query.email 
        },
    });

    if (duplicate) return res.sendStatus(409); //Conflict

    // Create a Teacher
    const teacher = {
      firstName: req.query.firstName,
      middleName: req.query.middleName,
      lastName: req.query.lastName,
      email: req.query.email,
      rank: req.query.rank,
      status: req.query.status ? req.query.status : false
    };
  
    // Save Teacher in the database
    Teacher.create(teacher)
    //.create(Teacher)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Teacher."
        });
      });
  };

  // Retrieve all Teachers from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    Teacher.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving teachers."
        });
      });
  };

// Find a single Teacher with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Teacher.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Teacher with id=" + id
      });
    });
};

// Update a Teacher by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Teacher.update(req.query, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Teacher was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.query is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Teacher with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Teacher.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Teacher was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Teacher with id=${id}. Maybe Teacher was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Teacher with id=" + id
      });
    });
};