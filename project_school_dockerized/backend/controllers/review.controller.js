const db = require("../models");
const Review = db.reviews;
const Student = db.students;
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

// Create and Save a new Review
exports.create = async (req, res) => {
    
    // Validate request
    if (!req.query.day && !req.query.month && !req.query.year && !req.query.email && !req.query.classrooms && !req.query.modules && !req.query.teacher_email && !req.query.review) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    student_email = req.query.email;

    // Find User
    const findStudent = await Student.findOne({
        where: {
            email: student_email
        },
    });
    if (!findStudent) return res.sendStatus(409); //Conflict

    teacher_email = req.query.teacher_email
    // Find User
    const findTeacher = await Teacher.findOne({
        where: {
            email: teacher_email
        },
    });
    if (!findTeacher) return res.sendStatus(409); //Conflict
    
    const review = {
        teacher: findTeacher.id,
        student: findStudent.id,
        day: req.query.day,
        month: req.query.month,
        year: req.query.year,
        classrooms: req.query.classroom,
        modules: req.query.module,
        review: req.query.review
    };
  
    // Save Review in the database
    Review.create(review)
    //.create(Review)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Review."
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