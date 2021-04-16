import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import FormPrenumnerant from "./FormPrenumerant";

// const api = axios.create({
//   baseURL: `http://localhost:5001/api/get`,
// });

function App() {
  const [prenumerantnummer, set_prenumerationsnr] = useState("");
  const [prenumerant_info, set_prenumerant_info] = useState([{
    pre_id: null,
    pre_persnr: null,
    pre_fornamn: null,
    pre_efternamn: null,
    pre_adress: null,
    pre_postnr: null
  }]);

  const [show_pre, set_show_pre] = useState(false);
  const [show_annons, set_show_annons] = useState(false);

  const search_prenumeration = async (e) => {
    e.preventDefault()
    try {
      
      //const prenumerant = { prenumerantnummer: 1 };
      const response = await fetch(`/api/get/${prenumerantnummer}`);
      const data = await response.json();
      console.log("ser bra ut, här är hämtade prenumeranten...");
      console.log(data);
      set_prenumerant_info(data);
    } catch (error) {
      console.log("fångade ett error! här är det");
      console.log(error);
    }

    // console.log(prenumerant);
    // const response = await api.get("");
    // console.log("=================");
    // console.log("=================");
    // const data = await response.json();
    // console.log(data);

    // .then(res => res.json())
    // .then(data => console.log(data));
    
  };





  // const Select_prenumerant = () => {
  //   if (annonsor == "Prenumerant") {
  //     console.log("GJORT VAL:", annonsor)
  //   }
  //   else if (annonsor == "Företag") {
  //     console.log("GJORT VAL:", annonsor)

  //   }


  // };


  return (
    <div className="App">
      <h1>Perrster och Siggster appster</h1>

      <h4>Jag är:</h4>
      <form>
        {/* <input type="radio" name="drivers" value="Prenumerant" onChange={(e) => set_annonsor(e.target.value)} />Prenumerant
          <input type="radio" name="drivers" value="Företag" onChange={(e) => set_annonsor(e.target.value)} />Företagare */}
          <input type="radio" name="drivers" value="Prenumerant" onClick={() => set_show_pre(true)} />Prenumerant
          <input type="radio" name="drivers" value="Företag" onClick={() => set_show_annons(true)} />Företag
          {/* <button type="submit" onClick={Select_prenumerant()}>Rensa val</button> */}
      </form>

      {
        show_pre?<form>
          <input
          type="text"
          placeholder="Prenumerationsnummer"
          />
        </form>:null
      }
      {
        show_annons?<form>
          <input
          type="text"
          placeholder="FÖRETAG"/>
        </form>:null
      }

       <form className="Prenumerant" onSubmit={search_prenumeration}>
        <h2>Hämta prenumerant</h2>
        <label>Prenumerations ID</label>
        <input
          type="text"
          name="prenumerationsnr"
          required
          onChange={(e) => {
            set_prenumerationsnr(e.target.value);
          }}
        />
        <input type = "submit" value = "Sök prenumerant/" ></input>
      </form>



          {/* onChange={(e) => { set_prenumerationsnr(e.target.value); }} />
        <button id="search">Sök</button>
      </form> */}


      <p>
        <strong>Prenumerations nummer:</strong> {prenumerant_info.pre_fornamn}
      </p>

      <FormPrenumnerant></FormPrenumnerant>

      {/* {[prenumerant_info].map((val) => {
      return (
        <div className="card">

        <p><strong>Prenumerations nummer:</strong> {val.pre_id}</p>
        <p><strong>Persnr:</strong> {val.pre_persnr}</p>
        <p><strong>Förnamn:</strong> {val.pre_fornamn}</p>
        <p><strong>Efternamn:</strong> {val.pre_efternamn}</p>
        <p><strong>Address:</strong> {val.pre_adress}</p>
        <p><strong>Annonsör:</strong> {val.pre_annonsor}</p>

        </div>
      )
    })}  */}
    </div>

  )
};
export default App;
