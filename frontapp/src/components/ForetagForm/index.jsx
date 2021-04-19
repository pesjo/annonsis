import React, { useState } from "react";
//import useStyles from "./styles";
import RadioButtons from "../RadioButtonsForetag"
import TextInput from "../TextInput";
import HarAnnonseratForm from "../HarAnnonseratForm"


const ForetagForm = () => {
    const [annonsor_orgnr, set_orgnanisationsnummer] = useState("");

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
     <RadioButtons></RadioButtons>
      <form className="ForetagForm" onSubmit={searchForetag}>


        
        <h2>Mitt förtag har annonserat tidigare: Hämta Företag</h2>
        <label>Skriv orgainsationsnummer</label>
        <br/>
       

       
      </form>


      <HarAnnonseratForm></HarAnnonseratForm>
        
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
