module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      first_name:{
        type: Sequelize.STRING
      },
      middle_name:{
        type: Sequelize.STRING
      },
      last_name:{
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