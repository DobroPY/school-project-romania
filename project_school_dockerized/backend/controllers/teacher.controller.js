const db = require("../models");
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

// Create and Save a new Teacher
exports.create = async (req, res) => {

  let requestData = req.body || req.query // Default to req.body
  let source = 'body';

  if (!req.body || (Object.keys(req.body).length === 0 && req.query)) {
      // Fall back to req.query if req.body is empty and req.query is present
      requestData = req.query;
      source = 'query';
  }

  if (!requestData.email && !requestData.first_name && !requestData.middle_name && !requestData.middle_name) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
  }

  const duplicate = await Teacher.findOne({
      where: { email: requestData.email },
  });

  if (duplicate) return res.sendStatus(409); // Conflict

  // Create a Teacher
  const teacher = {
      first_name: requestData.first_name,
      middle_name: requestData.middle_name,
      last_name: requestData.middle_name,
      email: requestData.email,
      rank: requestData.rank,
      status: requestData.status !== undefined ? requestData.status : false
  };

  // Save Teacher in the database
  Teacher.create(teacher)
      .then(data => {
          res.status(201).send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Teacher."
          });
      });
    // // Validate request
    // if (req.body){
    //   if (!req.body.email && !req.body.first_name && !req.body.middle_name && !req.body.middle_name) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    //   }
    // }
    // if(req.query){
    //   if (!req.query.email&&!req.query.first_name&&!req.query.middle_name&&!req.query.middle_name) {
    //     res.status(400).send({
    //       message: "Content can not be empty!"
    //     });
    //     return;
    //   }
    // }
    
    
    
    // const duplicate = await Teacher.findOne({
    //     where: {
    //         email: req.query.email 
    //     },
    // });

    // if (duplicate) return res.sendStatus(409); //Conflict

    // // Create a Teacher
    // const teacher = {
    //   first_name: req.query.first_name,
    //   middle_name: req.query.middle_name,
    //   middle_name: req.query.middle_name,
    //   email: req.query.email,
    //   rank: req.query.rank,
    //   status: req.query.status ? req.query.status : false
    // };
  
    // // Save Teacher in the database
    // Teacher.create(teacher)
    // //.create(Teacher)
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while creating the Teacher."
    //     });
    //   });
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