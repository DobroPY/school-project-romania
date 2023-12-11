const db = require("../models");
const Dummy = db.dummys;
const Op = db.Sequelize.Op;

// Create and Save a new Dummy
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Dummy
  const dummy = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Dummy in the database
  Dummy.create(dummy)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dummy."
      });
    });
};

// Retrieve all Dummys from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Dummy.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dummys."
      });
    });
};

// Find a single Dummy with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dummy.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Dummy with id=" + id
      });
    });
};

// Update a Dummy by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Dummy.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dummy was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Dummy with id=${id}. Maybe Dummy was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Dummy with id=" + id
      });
    });
};

// Delete a Dummy with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Dummy.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dummy was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Dummy with id=${id}. Maybe Dummy was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Dummy with id=" + id
      });
    });
};

// Delete all Dummys from the database.
exports.deleteAll = (req, res) => {
  Dummy.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Dummys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all dummys."
      });
    });
};

// find all published Dummy
exports.findAllPublished = (req, res) => {
  Dummy.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dummys."
      });
    });
};

