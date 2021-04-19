import React, { useState } from "react";
//import useStyles from "./styles";
import RadioButtonsForetag from "../RadioButtonsForetag"
import TextInput from "../TextInput";
import HarAnnonseratForm from "../HarAnnonseratForm"


const ForetagForm = () => {
    const [annonsor_orgnr, set_orgnanisationsnummer] = useState("");
    const [tidareAnnonsor, setTidareAnnonsor] = useState(true);


 // const classes = useStyles();
  
  const searchForetag = async(e) => {
    e.preventDefault();
    console.log("går in i funktionen searchForetag")
  }
  const updateForetag =async(e) => {
    e.preventDefault();
    console.log("går in i funktionen updateForetag")
  }

  return (
    <>
      <RadioButtonsForetag label ="Har du annonserat hos oss tidigare?" value = {tidareAnnonsor} setValue = {setTidareAnnonsor}></RadioButtonsForetag> 
      

      {tidareAnnonsor}
      {tidareAnnonsor ? (
        <>
        <form className="ForetagForm" onSubmit={searchForetag}>   
        <h2>Mitt förtag har annonserat tidigare: Hämta Företag</h2>
        <label>Skriv orgainsationsnummer</label>
        <br/>
        </form>


        <HarAnnonseratForm></HarAnnonseratForm>
          </>
      ) : <></>}
      {!tidareAnnonsor ? (
        <h2>HEj</h2>
      ) : null}
      
      
      
      
        
      <form className="UpdatePrenumerant" onSubmit={updateForetag}>
      {/* <TextInput label="Personnummer" value={prenumerant_persnr} setValue ={set_prenumerant_persnr} ></TextInput>
        <br/> */}
        {/* <TextInput
          label="Personnummer"
          value={prenumerant_persnr}
          setValue={set_prenumerant_persnr}
        ></TextInput>
        <br />
        

        <input
          type="submit"
          value="Spara information"
          className={classes.buttonStyle}
        ></input> */}
      </form>
    </>
  );
};

export default ForetagForm;
