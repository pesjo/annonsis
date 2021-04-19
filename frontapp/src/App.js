import React, { useState, useEffect } from "react";
import "./App.css";
import SecondaryHeading from "./components/SecondaryHeading/index";
import PrenumerantForm from "./components/PrenumerantForm";
import ForetagForm from "./components/ForetagForm";
import AnnonsForm from "./components/AnnonsForm";
import NavBar from "./components/NavBar"
function App() {
  const [show_pre, set_show_pre] = useState(true);
  const [show_annons, set_show_annons] = useState(false);
  const [error, set_error] = useState("");


  return (
    <div className="App">
{/* 
      
      <h1>Perrster och Siggster appster</h1>

      <h4>Jag är:</h4>
      <form>
        <input
          type="radio"
          name="drivers"
          value="Prenumerant"
          defaultChecked = "true"
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
      {/* </form>
      <SecondaryHeading text="Formlär där prenumerantens info auto-updateras ish snart efter att infon hämtats och så"></SecondaryHeading>
      <SecondaryHeading text="SOLEN SKINER"></SecondaryHeading>

      {show_pre ? (
        <PrenumerantForm></PrenumerantForm>
      ) : <></>}
      {!show_pre ? (
        <ForetagForm></ForetagForm>
      ) : null}

      <AnnonsForm></AnnonsForm>
    */} 


  <NavBar></NavBar>
  </div>
  );
}
export default App;
