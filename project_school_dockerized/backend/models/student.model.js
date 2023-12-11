module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
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