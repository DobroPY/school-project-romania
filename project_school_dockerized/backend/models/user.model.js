module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
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