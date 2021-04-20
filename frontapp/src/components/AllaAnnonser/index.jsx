import React, { useState, useEffect} from "react";
import AnnonsCard from "../AnnonsCard"
import {
  getAnnonser
} from "../../api/annonsApi";

const AllaAnnonser = () => {
  const [varupris, set_varupris] = useState("");
  const [innehall, set_innehall] = useState("");
  const [rubrik, set_rubrik] = useState("");
  const [annonspris, set_annonspris] = useState("");
  const [annons_list, set_annons_list] = useState([]);

  useEffect(() => {
   const response = getAnnonser();
   set_annons_list(response)
   console.log("resp: ",response)
   console.log("resp f1: ",response[0]);
   console.log("resp f2: ",response[1]);
   console.log("resp f2: ",response[1]);
  console.log("f3 ", response)

   console.log("Annnonslist", annons_list)
  }, []);

  
  
  return (
    <>
     <h2> Alla annonser syns nedan</h2>
     <AnnonsCard></AnnonsCard>
     
     {[annons_list].map((value) => {
          return (
            <div><p>Kuken: {value[0]}</p></div>
          );
        })}
    </>
  );
};

export default AllaAnnonser;



