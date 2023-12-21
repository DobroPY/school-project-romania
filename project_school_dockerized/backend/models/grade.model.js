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
        classroom:{
            type: Sequelize.INTEGER
        },
        module:{
            type: Sequelize.INTEGER
        },
        grade:{
            type: Sequelize.INTEGER
        },
        reward:{
            type:Sequelize.INTEGER
        }
    });

    return Grade;
};