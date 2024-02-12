const verifyRoles = (...allowedRoles) => {
    return  (req, res, next) => {

        if (!req?.roles) return res.sendStatus(401);
        const rolesArray= [...allowedRoles];


        userRoles = JSON.parse(req.roles.join("").replace("'","").replace("'",""))['roles'].split(',')
        .map(function (x) { return parseInt(x); 
        });

        result = userRoles.map(function(x){return rolesArray.includes(x);})

        requestResult = result.includes(true);
        if(requestResult === false) return res.sendStatus(401);
        next();
        
    }

}

module.exports = verifyRoles;