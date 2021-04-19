import React, { useState } from "react";
import TextInput from "../TextInput";

import { getAnnonsorById } from "../../api/annonsApi";
const HarAnnonseratForm = () => {
  const [annonsor_namn, setAnnonsorNamn] = useState("");

  const [annonsor_orgnr, setAnnonsorOrgNr] = useState("");
  const [annonsor_telnr, setAnnonsorTelnr] = useState("");
  const [annonsor_u_adress, setAnnonsorUAdress] = useState("");
  const [annonsor_u_postnr, setAnnonsorUPosstnr] = useState("");
  const [annonsor_u_ort, setAnnonsorUOrt] = useState("");

  const [annonsor_f_adress, setAnnonsorFAdress] = useState("");
  const [annonsor_f_postnr, setAnnonsorFPosstnr] = useState("");
  const [annonsor_f_ort, setAnnonsorFOrt] = useState("");

  //const classes = useStyles();

  const searchForetag = async (e) => {
    e.preventDefault();
    console.log("går in i funktionen searchForetag fron har annonserat");
    const data = await getAnnonsorById(annonsor_orgnr);

    setAnnonsorNamn(data.annonsor_namn);
    setAnnonsorTelnr(data.annonsor_telnr);
    setAnnonsorUAdress(data.annonsor_u_adress);
    setAnnonsorUPosstnr(data.annonsor_u_postnr);
    setAnnonsorUOrt(data.annonsor_u_ort);

    setAnnonsorFAdress(data.annonsor_f_adress);
    setAnnonsorFPosstnr(data.annonsor_f_postnr);
    setAnnonsorFOrt(data.annonsor_f_ort);
  };

  const updateForetag = async (e) => {
    e.preventDefault();

    console.log("TEST: update_Foretag kallas");
    const data = {
      annonsor_namn: annonsor_namn,
      annonsor_orgnr: annonsor_orgnr,

      annonsor_telnr: annonsor_telnr,
      annonsor_u_adress: annonsor_u_adress,
      annonsor_u_postnr: annonsor_u_postnr,
      annonsor_u_ort: annonsor_u_ort,

      annonsor_f_adress: annonsor_f_adress,
      annonsor_f_postnr: annonsor_f_postnr,
      annonsor_f_ort: annonsor_f_ort,
    };

    const response = await putPrenumerantInfo(data);
    console.log(response);
  };

  return (
    <>
      Skriv in ditt Organisationsnummer för att hämta info
      <form onSubmit={searchForetag}>
        <TextInput
          label="Organisationsnummer"
          value={annonsor_orgnr}
          setValue={setAnnonsorOrgNr}
        ></TextInput>
        <br />
        <input type="submit" value="Sök prenumerant/"></input>/>
      </form>
      <form onSubmit={updateForetag}>
      <TextInput
        label="Företagets namn"
        value={annonsor_namn}
        setValue={setAnnonsorNamn}
      ></TextInput>
      <br />
      <TextInput
        label="Telefonnummer"
        value={annonsor_telnr}
        setValue={setAnnonsorTelnr}
      ></TextInput>
      <br />
      <br />
      <br />
      Utdelningsadress
      <br />
      <TextInput
        label="Utdelningsadress"
        value={annonsor_u_adress}
        setValue={setAnnonsorUAdress}
      ></TextInput>
      <br />
      <TextInput
        label="Postnummer utdelning"
        value={annonsor_u_postnr}
        setValue={setAnnonsorUPosstnr}
      ></TextInput>
      <br />
      <TextInput
        label="Ort utdelning"
        value={annonsor_u_ort}
        setValue={setAnnonsorUOrt}
      ></TextInput>
      <br />
      <br />
      <br />
      Fakturaadress
      <br />
      <TextInput
        label="Fakturadress"
        value={annonsor_f_adress}
        setValue={setAnnonsorFAdress}
      ></TextInput>
      <br />
      <TextInput
        label="Postnummer faktura"
        value={annonsor_f_postnr}
        setValue={setAnnonsorFPosstnr}
      ></TextInput>
      <br />
      <TextInput
        label="Ort faktura"
        value={annonsor_f_ort}
        setValue={setAnnonsorFOrt}
      ></TextInput>
      <br />
      <input type="submit" value="Spara information" ></input>
      </form>
    </>
  );
};

export default HarAnnonseratForm;
