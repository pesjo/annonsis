import React, { useState, useEffect } from "react";
import "./App.css";
import FormPrenumnerant from "./FormPrenumerant";
import SecondaryHeading from "./components/SecondaryHeading/index";
import PrenumerantForm from "./components/PrenumerantForm";
function App() {
  const [show_pre, set_show_pre] = useState(true);
  const [show_annons, set_show_annons] = useState(false);
  const [error, set_error] = useState("");


  return (
    <div className="App">
      <h1>Perrster och Siggster appster</h1>

      <h4>Jag är:</h4>
      <form>
        <input
          type="radio"
          name="drivers"
          value="Prenumerant"
          onClick={() => set_show_pre(true)}
        />
        Prenumerant
        <input
          type="radio"
          name="drivers"
          value="Företag"
          onClick={() => set_show_pre(false)}
        />
        Företag
        {/* <button type="submit" onClick={Select_prenumerant()}>Rensa val</button> */}
      </form>

      {show_pre ? (
        <PrenumerantForm></PrenumerantForm>
      ) : <></>}
      {!show_pre ? (
        <form>
          <input type="text" placeholder="FÖRETAG" />
        </form>
      ) : null}

      <SecondaryHeading text="Formlär där prenumerantens info auto-updateras"></SecondaryHeading>

      

      {/* 
      <FormPrenumnerant></FormPrenumnerant> */}

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
