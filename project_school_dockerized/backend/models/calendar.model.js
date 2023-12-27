module.exports = (sequelize, Sequelize) => {
    const Calendar = sequelize.define("calendar", {
        day:{
            type:Sequelize.INTEGER  
        },
        month:{
            type:Sequelize.INTEGER
        },
        year:{
            type:Sequelize.INTEGER
        },
        classroom: {
        type: Sequelize.INTEGER
        }
    });

    return Calendar;
};