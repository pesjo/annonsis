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

app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
  console.log({ port });
});

console.log("hit kmr den 1")


app.get("/annonsApi/annonsorget", (req, res) => {
  console.log(req.params.id)
  const organisationsnummer =
    console.log("organisationsnummer: ", organisationsnummer)
  const organisationsnummer = 234;
  console.log("organisationsnummer: ", organisationsnummer)


  const sqlSelect = `Select * FROM tbl_annonsorer WHERE annonsor_orgnr = ?`;
  console.log("ökhvl")
  db.query(sqlSelect, [organisationsnummer], (err, result) => {
    if (result) {
      console.log(result);
      res.json(result[0]);
      console.log(result[0])
    }
    else {
      console.log(err)
    }

    return result;
  });
});
console.log("hit kmr den 2")


app.get("annonsApi/annonsget:id", (req, res) => {
  console.log(req.params)
  const prenumerantnummer = req.params.id;

  const sqlSelect = `Select * FROM tbl_prenumeranter WHERE pre_id = ?`;
  connection.query(sqlSelect, [prenumerantnummer], (err, result) => {
    if (result) {
      console.log(result);
      res.json(result[0]);
      console.log(result[0])
    }
    else {
      console.log(err)
    }

    return result;
  });
});
console.log("hit kmr den 3")


app.post("/annonsApi/annonspost", (req, res) => {
  const varupris = req.body.ad_varupris;
  const innehall = req.body.ad_innehall;
  const rubrik = req.body.ad_rubrik;
  const annonspris = req.body.ad_annonspris;

  const sqlSelect = `INSERT INTO tbl_ads SET ad_varupris = ?, ad_innehall = ?, ad_rubrik = ?, ad_annonspris = ?;`;

  connection.query(sqlSelect, [varupris, innehall, rubrik, annonspris], (err, result) => {
    if (result) {
      console.log(result);
      res.status(200).send("");


    }
    else {
      console.log(err)

    }
  });
});

app.get("/a", (req, res) => {
  console.log("result");

    }
  });

  res.status(200).send("bajs");

  console.log("hit kmr den ")


});

app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
  console.log({ port });
});



