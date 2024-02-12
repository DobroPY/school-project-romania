const db = require("../models");
const User = db.users;


const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) =>{

    const cookies = req.cookies

    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;

    const findUser = await User.findOne({
        where: {
            refreshToken: refreshToken
        },
    });

    //if (!findUser) return res.sendStatus(403); //Forbidden

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || findUser.email !== decoded.username) return res.sendStatus(403)
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                    {"UserInfo": {"username": decoded.username, "roles":roles}},
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '60s'}
                );
            res.json({accessToken});
        }
    );
        
}

module.exports = { handleRefreshToken };