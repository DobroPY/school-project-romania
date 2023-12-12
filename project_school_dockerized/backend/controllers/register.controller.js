const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt');

const handleNewUser = async (req,res) => {
    const{email,password} = req.body;
    if (!email || !password ) return res.status(400).json({ 'message': 'Email\
    and password are required'});

    const duplicate = await User.findOne({
        where: {
            email: email 
        },
    });

    if (duplicate) return res.sendStatus(409); //Conflict
    try{
        const hashedPassword = await bcrypt.hash(password,10);

        if (!email) {
            res.status(400).send({
                message: "Content can not be empty!"});
            return;
        }
    
        // Create a User
        const user = {
        email: email,
        password: hashedPassword,
        status: 1
        };
    
        // Save User in the database
        User.create(user)
        .then(data => {
            res.send(data);
            res.status(200).json({"message": 'Sucessful'});
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the User."
            });
        });

        res.status(201).json({'success': `New User ${email} created!`});

    }catch (err){
        res.status(500).json({'message': err.message});
    }
};

module.exports = {handleNewUser};