module.exports = (sequelize, Sequelize) => {
    const Dummy = sequelize.define("dummy", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Dummy;
  };