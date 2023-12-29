module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
        receiver:{
            type:Sequelize.INTEGER  
        },
        sender:{
            type:Sequelize.INTEGER
        },
        message:{
            type:Sequelize.STRING
        }
    });

    return Message;
};