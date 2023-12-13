module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("reviews", {
        teacher:{
            type:Sequelize.INTEGER
        },
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
        review:{
            type:Sequelize.STRING
        },
    });

    return Review;
};