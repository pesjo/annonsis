import React, { useState, useEffect } from "react";
import AnnonsCard from "../AnnonsCard"
import {
  getAnnonser
} from "../../api/annonsApi";

const AllaAnnonser = () => {
  const [annons_list, set_annons_list] = useState([]);

  useEffect(async () => {
    const response = await getAnnonser();
    set_annons_list(response)
    console.log("Hela response ", response)
    console.log("Annnonslist", annons_list[0])

  }, []);



  return (
    <>
      <h2> Alla annonser syns nedan</h2>

      {annons_list.map((value) => {
        return (

          <div>
            <AnnonsCard label={value.ad_rubrik} value1={value.ad_varupris} value2={value.ad_innehall} value3={value.ad_annonspris}></AnnonsCard>
          </div>

        );
      })}
    </>
  );
};

export default AllaAnnonser;



