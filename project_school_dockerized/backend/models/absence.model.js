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
        classroom:{
            type: Sequelize.STRING
        },
        module:{
            type: Sequelize.STRING
        }
    });

    return Absence;
};