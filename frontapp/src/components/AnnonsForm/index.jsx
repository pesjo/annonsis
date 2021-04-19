import React, { useState } from "react";
import useStyles from "./styles";
import TextInput from "../TextInput";
import {
  postAnnons
} from "../../api/annonsApi";

const AnnonsForm = () => {
  const [varupris, set_varupris] = useState("");
  const [innehall, set_innehall] = useState("");
  const [rubrik, set_rubrik] = useState("");
  const [annonspris, set_annonspris] = useState("");
  const classes = useStyles();

  const create_ad = async (e) => {
    e.preventDefault();
    console.log("Inne i create_ad");
    
    const data = {
      ad_varupris: varupris,
      ad_innehall: innehall,
      ad_rubrik: rubrik,
      ad_annonspris: annonspris
    };
    console.log("data i create_ad", data)
    const response = await postAnnons(data);
    console.log("response i create_ad", response);
  };

  return (
    <>
      <h2>Lägg ut annons</h2>

      <form className="CreateAd" onSubmit={create_ad}>

        <TextInput label="Varupris" setValue={set_varupris}></TextInput>
        <br />
        <TextInput label="Innehåll " setValue={set_innehall}></TextInput>
        <br />
        <TextInput label="Rubrik" setValue={set_rubrik}></TextInput>
        <br />
        <TextInput label="Annonspris" setValue={set_annonspris}></TextInput>
        <br />

        <input type="submit" value="Lägg ut annons" className={classes.buttonStyle}></input>
      </form>

    </>
  );
};

export default AnnonsForm;
