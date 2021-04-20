import React, { useState } from "react";
import useStyles from "./styles";
import RadioButtonsForetag from "../RadioButtonsForetag"
import TextInput from "../TextInput";
import HarAnnonseratForm from "../HarAnnonseratForm"
import FormNyttForetag from "../FormNyttForetag"


const ForetagForm = () => {
    const [annonsor_orgnr, set_orgnanisationsnummer] = useState("");
    const [tidareAnnonsor, setTidareAnnonsor] = useState(true);


 const classes = useStyles();
  
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
      {/* <RadioButtonsForetag label ="Har du annonserat hos oss tidigare?" value = {tidareAnnonsor} setValue = {setTidareAnnonsor}></RadioButtonsForetag>  */}
      
      <form>
        <input
          type="radio"
          name="radio"
          defaultChecked = "true"
          onClick={() => setTidareAnnonsor(true)}
        />
        Jag har annonserat hos er tidigare
        <input
          type="radio"
          name="radio"
          onClick={() => setTidareAnnonsor(false)}
        />
        Jag har inte annonserat tidigare

        {/* <button type="submit" onClick={Select_prenumerant()}>Rensa val</button> */}
      </form>
     {tidareAnnonsor}
      {tidareAnnonsor ? (
        <>
        <form className="ForetagForm" onSubmit={searchForetag}>   
        <h2>Mitt företag har annonserat tidigare</h2>
        <br/>
        </form>


        <HarAnnonseratForm></HarAnnonseratForm>
          </>
      ) : <></>}
      {!tidareAnnonsor ? (
        <FormNyttForetag></FormNyttForetag>
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
