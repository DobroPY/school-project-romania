module.exports = (sequelize, Sequelize) => {
    const Director = sequelize.define("director", {
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
      rank: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Director;
  };