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

  return (
    <div className="App">
      <h1>Pernie Siggster appster</h1>

      <form className="new" onSubmit = {search_prenumeration}>
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
        <button id="search" onClick={search_prenumeration}>
          Sök
        </button>
      </form>
      {prenumerantnummer}

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
  );
}

export default App;
