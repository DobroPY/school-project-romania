const express = require('express');
const dotenv= require('dotenv');
// const cors=require('cors');
dotenv.config()  
const app = express();
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

db.sequelize.sync({force:true,alter:true});

require("./routes/teacher.routes")(app);
require("./routes/director.routes")(app);
require("./routes/student.routes")(app);
require("./routes/classroom.routes")(app);
require("./routes/user.routes")(app);
require("./routes/register.routes")(app);
require("./routes/auth.routes")(app);
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





