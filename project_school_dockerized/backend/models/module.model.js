module.exports = (sequelize, Sequelize) => {
    const Module = sequelize.define("module", {
      teacher: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      classroom: {
        type: Sequelize.STRING
      }
    });
  
    return Module;
  };