module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
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
      rank: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Teacher;
  };