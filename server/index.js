const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"password",
    database: "crud",
});

app.use(cors());
app.use(express.json());       
app.use(bodyParser.urlencoded({extended: true}));


app.post("/api/insert", (req, res) => {   
    const eName = req.body.eName;
    const ePassWord = req.body.ePassWord;
    const leaveType = req.body.leaveType;

    const sqlInsert = "INSERT INTO emp (eName, ePassWord, leaveType) VALUES (?, ?, ?)"
    db.query(sqlInsert, [eName,ePassWord, leaveType], (err, result) => {
    console.log(result);   
    });
   
});


app.listen(3001, () => {
    console.log("running on port 3001");
});

