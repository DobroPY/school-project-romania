module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
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