module.exports = (sequelize, Sequelize) => {
    const Grade = sequelize.define("grades", {
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
        },
        grades:{
            type: Sequelize.STRING
        },
        reward:{
            type:Sequelize.STRING
        }
    });

    return Grade;
};