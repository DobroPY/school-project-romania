module.exports = (sequelize, Sequelize) => {
    const Director = sequelize.define("director", {
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