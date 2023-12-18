module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
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
      password: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      refreshToken:{
        type:Sequelize.STRING,
      },
      roles: {
        type:Sequelize.STRING
      }
    });
  
    return User;
  };