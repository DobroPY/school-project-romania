const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleNewUser = async (req,res) => {

    if(req.body){
        if (!req.body.email && !req.body.password && !req.body.firstName&&!req.body.middleName&& !req.body.lastName) 
        return res.status(400).json({ 'message': 'Email, password, First Name, Middle Name, Last Name are required'});
    }else if(req.query){
        if(!req.query.email && !req.query.password &&!req.query.firstName&&!req.query.middleName&&!req.query.lastName)
        return res.status(400).json({ 'message': 'Email, password, First Name, Middle Name, Last Name are required'});
    }else{
        return res.status(400).json({ 'message': 'Email, password, First Name, Middle Name, Last Name are required'});
    }
    

    const duplicate = await User.findOne({
        where: {
            email: req.body.email 
        },
    });

    if (duplicate) return res.sendStatus(409); //Conflict
    try{
        const hashedPassword = await bcrypt.hash(req.body.password || req.query.password,10);
        
        if(req.body){
            if (!req.body.email) {
                res.status(400).send({
                    message: "Content can not be empty!"});
                return;
            }
        }else if(req.query){
            if (!req.query.email) {
                res.status(400).send({
                    message: "Content can not be empty!"});
                return;
            }
        } 

        const refreshToken = jwt.sign(
            {'username': req.query.email || req.body.email},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        // Create a User
        const user = {
        firstName: req.body.firstName || req.query.firstName,
        middleName: req.body.middleName || req.query.middleName,
        lastName: req.body.lastName || req.query.lastName,
        email: req.body.email || req.query.email,
        password: hashedPassword,
        status: 1,
        refreshToken:refreshToken,
        roles: ''
        };
    
        // Save User in the database
        User.create(user)
        .then(data => {
            res.send(data);
            // res.status(200).json({"message": 'Sucessful'});
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the User."
            });
        });
        res.status(201).json({'success': `New User ${req.body.email || req.query.email} created!`});

    }catch (err){
        res.status(500).json({'message': err.message});
    }
};

module.exports = {handleNewUser};