const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) =>{

    const{email,password} = req.body;
    if (!email || !password ) return res.status(400).json({ 'message': 'Email\
    and password are required'});

    const findUser = await User.findOne({
        where: {
            email: email
        },
    });

    if (!findUser) return res.sendStatus(401); //Unauthorized

    //Password
    const match = await bcrypt.compare(password, findUser.password);
    if (match){
        res.json({ "success": `User ${findUser.email} is logged in!` });
    }else{
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };