const express = require('express');
const dotenv= require('dotenv');
const verifyJWT = require('./middleware/verifyJWT.js');
const cookieParser = require('cookie-parser')
const cors=require('cors');


dotenv.config()  
const app = express();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [process.env.CLIENT_ORIGIN,
    'http://www.school-management.makesoftwares.ro',
    'http://school-management.makesoftwares.ro',
    '64.226.106.47',
    '64.226.106.47:3000',
    'http://localhost:8081',
    'http://localhost:8080',
    'http://localhost:3000',
    'http://localhost:6868',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8888',
    'http://127.0.0.1:8081',
    'http://127.0.0.1:9200',
    'http://elasticsearch:9200',
    'http://localhost:9200'
    ]

const corsOptions={
    origin: (origin,callback)=> {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error('Not Allowed By CORS'));
        }
    },
    optionsSuccessStatus:200

}

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, OPTIONS, HEAD');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    next();
 });

app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server UL");
});
const db = require("./models");

db.sequelize.sync({force: false, alter: false});

require("./routes/register.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/refresh.routes")(app);
require("./routes/logout.routes")(app);


//Frontend Integration
app.use(verifyJWT);
require("./routes/elastic.routes")(app);
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
require("./routes/message.routes")(app);


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);





