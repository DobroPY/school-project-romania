const db = require("../models");
const Review = db.reviews;
const Student = db.students;
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  let requestData = req.body || {};

  // Use req.query if req.body is empty and req.query is present
  if (!req.body || (Object.keys(req.body).length === 0 && req.query)) {
      requestData = req.query;
  }

  // Validate request
  if (!requestData.day && !requestData.month && !requestData.year && !requestData.email && !requestData.classroom && !requestData.module && !requestData.teacher_email && !requestData.review) {
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
  if (!findStudent) return res.status(404).send({ message: "Student not found" }); // Not found

  // Find Teacher
  const findTeacher = await Teacher.findOne({
      where: {
          email: requestData.teacher_email
      },
  });
  if (!findTeacher) return res.status(404).send({ message: "Teacher not found" }); // Not found

  const review = {
      teacher: findTeacher.id,
      student: findStudent.id,
      day: requestData.day,
      month: requestData.month,
      year: requestData.year,
      classrooms: requestData.classroom,
      modules: requestData.module,
      review: requestData.review
  };

  // Save Review in the database
  Review.create(review)
      .then(data => {
          res.status(201).send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Review."
          });
      });
};

  // Retrieve all Reviews from the database.
exports.findAll = (req, res) => {
    const day = req.query.day;
    const month = req.query.month;
    const year = req.query.year;

    var condition = day&&month&&year ? { day: { [Op.like]: `%${day&&month&&year}%` } } : null;
  
    Review.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Review."
        });
      });
  };

// Find a single Review with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Review.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Review with id=" + id
      });
    });
};

// Update a Review by the id in the request
exports.update = (req, res) => {
    const day = req.params.day;
    const month = req.params.month;
    const year = req.params.year;

    Review.update(req.query, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Review was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Review with id=${id}. Maybe Review was not found or req.query is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Review with id=" + id
        });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Review.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Review was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Review with id=${id}. Maybe Review was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Review with id=" + id
      });
    });
};