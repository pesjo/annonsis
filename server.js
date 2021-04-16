var express = require("express");
var mysql = require("mysql2");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const port = 5000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "annonssystem",
});

connection.connect();

console.log("hejsan pernilla");

app.listen(port, () => {
    console.log(`app listening at port http://localhost:${port}`);
    console.log({ port });
  });

app.get("/api/annonspost", (req, res) => {
     const varupris = 2;
     const innehall = "1";
     const rubrik = "1";
     const annonspris = 1;

     const sqlSelect = `INSERT INTO tbl_ads SET ad_varupris = ?, ad_innehall = ?, ad_rubrik = ?, ad_annonspris = ?;`;

     connection.query(sqlSelect, [varupris, innehall, rubrik, annonspris], (err, result) => {
       if(result){
            console.log(result);
            res.status(200).send("");


       }
       else{
         console.log(err)

       }
   });
 });

 