const db = require("../models");
const User = db.users;


const handleLogout = async (req, res) =>{

    const cookies = req.cookies

    if (!cookies?.jwt) return res.status(204);

    const refreshToken = cookies.jwt;

    const findUser = await User.findOne({
        where: {
            refreshToken: refreshToken
        },
    });
    
    if (!findUser){
        res.clearCookie('jwt', {httpOnly: true});
        return res.sendStatus(403); //Forbidden
    } 

    //Delete RefreshToken in db
    User.update({'refreshToken': ''}, {where: {id:findUser.id}}, {multi:true}).then(function(){
        console.log('refresh token updated successfully!');
    })

    res.clearCookie('jwt', {httpOnly: true});
    res.sendStatus(204);
}

module.exports = { handleLogout };