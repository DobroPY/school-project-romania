module.exports = (sequelize, Sequelize) => {
    const Director = sequelize.define("director", {
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
  
    return Director;
  };