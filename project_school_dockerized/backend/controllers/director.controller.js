const db = require("../models");
const Director = db.directors;
const Op = db.Sequelize.Op;

// Create and Save a new Director
exports.create = async (req, res) => {
  let requestData = req.body || {};

  // Use req.query if req.body is empty and req.query is present
  if (!req.body || (Object.keys(req.body).length === 0 && req.query)) {
      requestData = req.query;
  }

  // Validate request
  if (!requestData.email && !requestData.first_name && !requestData.middle_name && !requestData.middle_name) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
  }

  const duplicate = await Director.findOne({
      where: {
          email: requestData.email 
      },
  });

  if (duplicate) return res.sendStatus(409); //Conflict

  // Create a Director
  const director = {
      first_name: requestData.first_name,
      middle_name: requestData.middle_name,
      last_name: requestData.middle_name,
      email: requestData.email,
      rank: requestData.rank,
      status: requestData.status !== undefined ? requestData.status : false
  };

  // Save Director in the database
  Director.create(director)
      .then(data => {
          res.status(201).send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Director."
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