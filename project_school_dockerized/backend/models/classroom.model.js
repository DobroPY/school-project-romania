module.exports = (sequelize, Sequelize) => {
    const Classroom = sequelize.define("classroom", {
      teacher: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      seats: {
        type: Sequelize.INTEGER
      }
    });
  
    return Classroom;
  };