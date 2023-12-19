const express = require('express');
const dotenv= require('dotenv');
const verifyJWT = require('./middleware/verifyJWT.js');
const cookieParser = require('cookie-parser')
//const cors=require('cors');

dotenv.config()  
const app = express();

app.use(express.json());
app.use(cookieParser());

// const corsOptions={
//     origin: process.env.CLIENT_ORIGIN
// }
const PORT = process.env.NODE_DOCKER_PORT || 8080;
// app.use(cors(corsOptions))

app.get('/', (req, res)=>{
    res.status(200);
    console.log('200');
    res.send("Welcome to root URL of Server UL");
});

const db = require("./models");

db.sequelize.sync({force: false,alter: false});

require("./routes/register.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/refresh.routes.js")(app);
require("./routes/logout.routes.js")(app);


//Frontend Integration
app.use(verifyJWT);
require("./routes/teacher.routes")(app);
require("./routes/director.routes")(app);
require("./routes/student.routes")(app);
require("./routes/classroom.routes")(app);
require("./routes/user.routes")(app);
require("./routes/module.routes")(app);
require("./routes/calendar.routes")(app);
require("./routes/absence.routes")(app);
require("./routes/grade.routes")(app);
require("./routes/review.routes")(app);
require("./routes/dummy.routes")(app);


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);





