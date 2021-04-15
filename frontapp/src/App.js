import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [prenumerationsnr, set_prenumerationsnr] = useState('');
  const [prenumerant_info, set_prenumerant_info] = useState('');


  const search_prenumeration = () => {
    const data = {prenumerantnummer:prenumerationsnr}
    const response = fetch(`http://localhost:5001/api/get`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'}, 
      body: JSON.stringify(data) 
    })
    set_prenumerant_info(response);
  };
  

  return (
    <div className="App">
      <h1>Pernie & Siggster appster</h1>

      <form className="new">
          <h2>Hämta prenumerant</h2>
        <label>Prenumerations ID</label>
        <input
          type="text"
          name="prenumerationsnr"
          required
          onChange={(e)=> {set_prenumerationsnr(e.target.value);}}/>
        <button id="search" onClick={search_prenumeration}>Sök</button>
        </form>
        {prenumerationsnr}

        <p><strong>Prenumerations nummer:</strong> {prenumerant_info}</p>



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
}

export default App;
