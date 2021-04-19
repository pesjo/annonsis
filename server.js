var express = require("express");
var mysql = require("mysql2");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const port = 5000;

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "annonssystem",
});
db.connect();
console.log(db);

app.listen(port, () => {
      console.log(`app listening at port http://localhost:${port}`);
      console.log({ port });
});

console.log("hit kmr den 1")


app.get("/annonsApi/annonsorget/:id", (req, res) => {
  const organisationsnummer = req.params.id;
  console.log("organisationsnummer: ", organisationsnummer)

   const sqlSelect = `Select * FROM tbl_annonsorer WHERE annonsor_orgnr = ?`;
   console.log("ökhvl")
   db.query(sqlSelect, [organisationsnummer], (err, result) => {
      if(result){
           console.log(result);
           res.json(result[0]);
           console.log(result[0])
      }
      else{
        console.log(err)
       }

   return result;
});
});
console.log("hit kmr den 2")


app.put("/annonsApi/foretagput", (req, res) => {
  console.log("halli hallåe");
  

   const annonsor_orgnr =  req.body.annonsor_orgnr;
   const annonsor_namn = req.body.annonsor_namn;
   const annonsor_telnr = req.body.annonsor_telnr;

   console.log("hämtat organisationsnummer", annonsor_orgnr);
   console.log("hämtat organisationNAMN", annonsor_namn);

   const sqlSelect = `UPDATE tbl_annonsorer SET annonsor_namn = ?,  annonsor_telnr = ?  WHERE annonsor_orgnr = (?);`;


   db.query(sqlSelect, [annonsor_namn, annonsor_telnr, annonsor_orgnr], (err, result) => {
     if(result){
      console.log("result: ", result);
      res.status(200).send("rapp bapp bam");
      
     }
     else{
      console.log("error: ", err)


     }
 });
});



//här jobbar signe just nu :) 
app.post("/annonsApi/annonspost/", (req, res) => {
  const varupris = 40;
  const innehall = "1jjjjj";
  const rubrik = "1";
  const annonspris = 1;

  console.log("pris: ",req.body.ad_varupris);

  const sqlSelect = `INSERT INTO tbl_ads SET ad_varupris = ?, ad_innehall = ?, ad_rubrik = ?, ad_annonspris = ?;`;

  db.query(sqlSelect, [varupris, innehall, rubrik, annonspris], (err, result) => {
    if(result){
         console.log("såhär gick det: ",result);
         res.status(200).send("TJooooho");


    }
    else{
      console.log("the errorr was: ", err)

    }
});
});


// app.get("annonsApi/annonsget:id", (req, res) => {
//   console.log(req.params)
//   const prenumerantnummer = req.params.id;

//    const sqlSelect = `Select * FROM tbl_prenumeranter WHERE pre_id = ?`;
//    connection.query(sqlSelect, [prenumerantnummer], (err, result) => {
//       if(result){
//            console.log(result);
//            res.json(result[0]);
//            console.log(result[0])
//       }
//       else{
//         console.log(err)
//        }

//    return result;
// });
// });


