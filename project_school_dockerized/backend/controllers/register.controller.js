const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleNewUser = async (req,res) => {

    if (!req.query.email || !req.query.password &&!req.query.firstName&&!req.query.middleName&&!req.query.lastName&&!req.query.roles) return res.status(400).json({ 'message': 'Email, password, First Name, Middle Name, Last Name are required'});

    const duplicate = await User.findOne({
        where: {
            email: req.query.email 
        },
    });
    console.log(duplicate);
    if (duplicate) return res.sendStatus(409); //Conflict
    try{
        const hashedPassword = await bcrypt.hash(req.query.password,10);

        if (!req.query.email) {
            res.status(400).send({
                message: "Content can not be empty!"});
            return;
        }

        const refreshToken = jwt.sign(
            {'username': req.query.email},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        // Create a User
        const user = {
        firstName: req.query.firstName,
        middleName: req.query.middleName,
        lastName: req.query.lastName,
        email: req.query.email,
        password: hashedPassword,
        status: 1,
        refreshToken:refreshToken,
        roles: req.query.roles
        };
    
        // Save User in the database
        User.create(user)
        .then(data => {
            res.send(data);
            //res.status(200).json({"message": 'Sucessful'});
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the User."
            });
        });
        //res.status(201).json({'success': `New User ${email} created!`});

    }catch (err){
        res.status(500).json({'message': err.message});
    }
};

module.exports = {handleNewUser};