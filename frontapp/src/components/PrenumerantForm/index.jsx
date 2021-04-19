import React, { useState } from "react";
import useStyles from "./styles";

import {
  getPrenumerant,
  getPrenumerantById,
  putPrenumerantInfo,
} from "../../api/prenumerantApi";
import TextInput from "../TextInput";

const PrenumerantForm = () => {
  const [prenumerant_id, set_prenumerant_id] = useState("");
  const [prenumerant_persnr, set_prenumerant_persnr] = useState("");
  const [prenumerant_fornamn, set_prenumerant_fornamn] = useState("");
  const [prenumerant_efternamn, set_prenumerant_efternamn] = useState("");
  const [prenumerant_adress, set_prenumerant_adress] = useState("");
  const [prenumerant_postnr, set_prenumerant_postnr] = useState("");
  const classes = useStyles();

  const search_prenumeration = async (e) => {
    e.preventDefault();
    const data = await getPrenumerantById(prenumerant_id);

    set_prenumerant_persnr(data.pre_persnr);
    set_prenumerant_fornamn(data.pre_fornamn);
    set_prenumerant_efternamn(data.pre_efternamn);
    set_prenumerant_adress(data.pre_adress);
    set_prenumerant_postnr(data.pre_postnr);
  };

  const update_prenumerant = async (e) => {
    e.preventDefault();

    console.log("TEST: update_prenumerant kallas");
    const data = {
      pre_id: prenumerant_id,
      pre_persnr: prenumerant_persnr,
      pre_fornamn: prenumerant_fornamn,
      pre_efternamn: prenumerant_efternamn,
      pre_adress: prenumerant_adress,
      pre_postnr: prenumerant_postnr,
    };

    const response = await putPrenumerantInfo(data);
    console.log(response);
  };

  return (
    <>
      <form className="Prenumerant" onSubmit={search_prenumeration}>
        <h2>Hämta prenumerant</h2>
        <label>Prenumerations ID</label>
        <input
          className={classes.formStyle}
          type="text"
          name="prenumerationsnr"
          required
          onChange={(e) => {
            set_prenumerant_id(e.target.value);
          }}
        />
        <input type="submit" value="Sök prenumerant/" className={classes.buttonStyle}></input>
      </form>

      <form className="UpdatePrenumerant" onSubmit={update_prenumerant}>

        <TextInput label="Personnummer" value={prenumerant_persnr} setValue ={set_prenumerant_persnr} ></TextInput>
        <br/>
        <TextInput label="Förnamn" value={prenumerant_fornamn} setValue ={set_prenumerant_fornamn} ></TextInput>
        <br/>
        <TextInput label="Efternamn" value={prenumerant_efternamn} setValue ={set_prenumerant_efternamn} ></TextInput>
        <br/>
        <TextInput label="Adress" value={prenumerant_adress} setValue ={set_prenumerant_adress} ></TextInput>
        <br/>
        <TextInput label="Postnummer" value={prenumerant_postnr} setValue ={set_prenumerant_postnr} ></TextInput>
        <br/>
        
        <input type="submit" value="Spara information" className={classes.buttonStyle}></input>
      </form>
    </>
  );
};

export default PrenumerantForm;
