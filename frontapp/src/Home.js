// import React from "react";

// import NavBar from "../src/components/NavBar"; 

// export default function Home(){
//     return( 
//       <div className = "home">
//                 <NavBar className = "header"></NavBar>
                
  
//                 {/* {type === "" && <InfoAboutMe />} */}
  
//                 {/* <Switch>
//                     <Route path="/about">
//                         <InfoAboutMe className="infoAboutMe"/>
//                     </Route>
//                 </Switch> 
//    */}
  
  
            
  
         
//       </div>
         
//     );
    
//   }




import React, { useState, useEffect } from "react";
import "./App.css";
import SecondaryHeading from "./components/SecondaryHeading/index";
import PrenumerantForm from "./components/PrenumerantForm";
import ForetagForm from "./components/ForetagForm";
import AnnonsForm from "./components/AnnonsForm";
import NavBar from "./components/NavBar"
function Home() {
  const [show_pre, set_show_pre] = useState();
  const [show_annons, set_show_annons] = useState(false);
  const [error, set_error] = useState("");
  const [pris, setPris] = useState("");

  useEffect(() => {
    //fetchData();
    //deleteGodis();
    //addGodis();
    setPrisAndPren(show_pre);
  }, []);

  const setPrisAndPren = (Prenumerant) => {
    set_show_pre(Prenumerant);
    if(Prenumerant){
      setPris(0);
    }else if(!Prenumerant){
      setPris(40);
    }
    console.log("pris ", pris);
    
  }


  return (
    <div className="App">

      
      <h1>Lägg till en annons</h1>

      <h4>Jag är:</h4>
      <form>
        <input
          type="radio"
          name="drivers"
          value="Prenumerant"
          defaultChecked = "true"
          onClick={() => setPrisAndPren(true)}
        />
        Prenumerant
        <input
          type="radio"
          name="drivers"
          value="Företag"
          onClick={() => setPrisAndPren(false)}
        />
        Företag
        {/* <button type="submit" onClick={Select_prenumerant()}>Rensa val</button> */}
      </form>
     

      {show_pre ? (
        <PrenumerantForm></PrenumerantForm>
      ) : <></>}
      {!show_pre ? (
        <ForetagForm></ForetagForm>
      ) : null}

      <AnnonsForm pris={pris}></AnnonsForm>
    </div>
  );
}
export default Home;
