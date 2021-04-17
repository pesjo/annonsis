import React, { useState } from "react";
import {
  getPrenumerant,
  getPrenumerantById,
  putPrenumerantInfo,
} from "../../api/prenumerantApi";

const PrenumerantForm = () => {
  const [prenumerant_id, set_prenumerant_id] = useState("");
  const [prenumerant_persnr, set_prenumerant_persnr] = useState("");
  const [prenumerant_fornamn, set_prenumerant_fornamn] = useState("");
  const [prenumerant_efternamn, set_prenumerant_efternamn] = useState("");
  const [prenumerant_adress, set_prenumerant_adress] = useState("");
  const [prenumerant_postnr, set_prenumerant_postnr] = useState("");

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
          type="text"
          name="prenumerationsnr"
          required
          onChange={(e) => {
            set_prenumerant_id(e.target.value);
          }}
        />
        <input type="submit" value="Sök prenumerant/"></input>
      </form>

    

      <form className="UpdatePrenumerant" onSubmit={update_prenumerant}>
        <div className="field">
          <label>Personnummer</label>
          <input
            type="text"
            name="prenumerationsnr"
            defaultValue={prenumerant_persnr}
            value={prenumerant_persnr}
            required
            onChange={(e) => {
              set_prenumerant_persnr(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="field">
          <label>Förnamn</label>
          <input
            type="text"
            name="prenumerationsnr"
            defaultValue={prenumerant_fornamn}
            value={prenumerant_fornamn}
            required
            onChange={(e) => {
              set_prenumerant_fornamn(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="field">
          <label>Efternamn</label>
          <input
            type="text"
            name="prenumerationsnr"
            defaultValue={prenumerant_efternamn}
            value={prenumerant_efternamn}
            required
            onChange={(e) => {
              set_prenumerant_efternamn(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="field">
          <label>Adress</label>
          <input
            type="text"
            name="prenumerationsnr"
            defaultValue={prenumerant_adress}
            value={prenumerant_adress}
            required
            onChange={(e) => {
              set_prenumerant_adress(e.target.value);
            }}
          />
        </div>

        <br />
        <div className="field">
          <label>Postnummer</label>
          <input
            type="text"
            name="prenumerationsnr"
            defaultValue={prenumerant_postnr}
            value={prenumerant_postnr}
            required
            onChange={(e) => {
              set_prenumerant_postnr(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Spara information"></input>
      </form>

    
    </>
  );
};

export default PrenumerantForm;
