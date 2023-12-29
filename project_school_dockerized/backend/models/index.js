const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.directors = require("./director.model")(sequelize,Sequelize);
db.teachers = require("./teacher.model")(sequelize,Sequelize);
db.students = require("./student.model")(sequelize,Sequelize);
db.classrooms = require("./classroom.model")(sequelize,Sequelize);
db.users = require("./user.model")(sequelize,Sequelize);
db.modules = require("./module.model")(sequelize,Sequelize);
db.calendars = require("./calendar.model")(sequelize,Sequelize);
db.absences = require("./absence.model")(sequelize,Sequelize);
db.messages = require("./message.model")(sequelize,Sequelize);
db.grades = require("./grade.model")(sequelize,Sequelize);
db.reviews = require("./review.model")(sequelize,Sequelize);
db.dummys = require("./dummy.model")(sequelize, Sequelize);

module.exports = db;