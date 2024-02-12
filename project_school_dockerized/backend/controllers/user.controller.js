
const db = require("../models");
const bcrypt = require('bcrypt');
const User = db.users;
const Op = db.Sequelize.Op;



// Create and Save a new User
exports.create = async (req, res) => {

  function validateFields(req) {
      const fields = ["first_name", "middle_name", "middle_name", "email", "password"];
      const requestData = req.body || req.query; // Assuming priority to req.body
      return fields.every(field => requestData[field]);
  }

  async function handleUserRequest(reqData, res) {
      try {
          const duplicate = await User.findOne({ where: { email: reqData.email } });
          if (duplicate) return res.sendStatus(409); // Conflict

          const hashedPassword = await bcrypt.hash(reqData.password, 10);

          const user = {
              first_name: reqData.first_name,
              middle_name: reqData.middle_name,
              last_name: reqData.middle_name,
              email: reqData.email,
              password: hashedPassword,
              status: 1
          };

          const data = await User.create(user);
          res.status(201).send(data);
      } catch (err) {
          res.status(500).send({ message: err.message || "Some error occurred while creating the User." });
      }
  }

  // Assuming this is inside an async route handler
  if (Object.keys(req.body).length > 0 || Object.keys(req.query).length > 0) {
      if (!validateFields(req)) {
          return res.status(400).json({ 'message': 'first_name, middle_name, middle_name, email, password are required' });
      }
      const requestData = req.body || req.query; // Assuming priority to req.body
      await handleUserRequest(requestData, res);
  } else {
      return res.status(400).json({ 'message': 'Request must contain data' });
  }
  
}

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