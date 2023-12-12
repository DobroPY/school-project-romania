module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      firstName:{
        type: Sequelize.STRING
      },
      middleName:{
        type: Sequelize.STRING
      },
      lastName:{
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Student;
  };