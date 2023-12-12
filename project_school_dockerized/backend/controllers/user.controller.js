
const db = require("../models");
const bcrypt = require('bcrypt');
const User = db.users;
const Op = db.Sequelize.Op;



// Create and Save a new User
exports.create = async (req, res) => {
    // Validate request
    // console.log(req.body);
    if (!req.query.email&&!req.query.firstName&&!req.query.middleName&&!req.query.lastName&&!req.query.password) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    const duplicate = await User.findOne({
      where: {
          email: req.query.email 
      },
    });

    if (duplicate) return res.sendStatus(409); //Conflict

    // Create a User
    const user = {
      firstName: req.query.firstName,
      middleName: req.query.middleName,
      lastName: req.query.lastName,
      email: req.query.email,
      password: await bcrypt.hash(req.query.password,10),
      status: req.query.status
    };
  
    // Save User in the database
    User.create(user)
    //.create(User)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

  // Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.query, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.query is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};