module.exports = (sequelize, Sequelize) => {
    const Absence = sequelize.define("absences", {
        student:{
            type:Sequelize.INTEGER
        },
        day:{
            type:Sequelize.INTEGER  
        },
        month:{
            type:Sequelize.INTEGER
        },
        year:{
            type:Sequelize.INTEGER
        },
        classrooms:{
            type: Sequelize.STRING
        },
        modules:{
            type: Sequelize.STRING
        }
    });

    return Absence;
};