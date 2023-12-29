const db = require("../models");
const Message = db.messages;

exports.send = async (req, res) => {
    
    const {from, to , message} = req.body;

    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    const newMessageText = {
        receiver:to,
        sender:from,
        message:message
    }

    Message.create(newMessageText)
        .then(data => {
            console.log('message sent!');
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Module."
        });
    });
};

exports.get = async (req, res) => {
    
    try{
        const from  = req.params.user1Id;
        const to  = req.params.user2Id;

        const newMessage = await Message.find({
            receiver:to,
            sender:from,
        }).sort({updatedAt:-1});

        
        const allMessages = newMessage.map((msg) =>{
            return {
                myself: msg.Sender.toString() === from,
                message: msg.message
            }
        });
        
        return res.sendStatus(200).json(allMessages);
    } catch(error){
        return res.status(500).json('Internal Server Error')
    }
};