module.exports = (sequelize, Sequelize) => {
    const Module = sequelize.define("module", {
      teacher: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      classroom: {
        type: Sequelize.INTEGER
      }
    });
  
    return Module;
  };