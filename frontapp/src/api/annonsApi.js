export const getAnnonsorById = async (id) => {
    console.log("id" , id);
    
    try{
        
        const response = await fetch(`http://localhost:5000/annonsApi/annonsorget/${id}`);
        console.log("response", response);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log("fångade ett error när ngt skulle hämtas här är det");
        console.log(error);
    }

}


export const putAnnonsorInfo = async(payload) =>{
    console.log("inne i putAnninsorInfo")
    
    try{
       const response = await fetch(`http://localhost:5000/annonsApi/foretagput/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
       });
       console.log("response", response);
       return response.json();
       
    }
    catch (error){
        console.log("fångade ett error när ngt skulle uppdateras! här är det");
        console.log("error från putAnnonsorInfo: ", error);
        
    }

}

export const postAnnons = async(payload) =>{
    console.log("Vi kommmer till rätt funktion i rätt api nu ")

    try{
       const response = await fetch(`http://localhost:5000/annonsApi/annonspost/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
       });
       console.log("response till postAnnons", response);
       const data = await response;
       return data;
    }
    catch (error){
        console.log("fångade ett error när en annons skulle läggas in! här är det");
        console.log(error);
        
    }

}



export const postForetagInfo = async(payload) =>{
    console.log("inne i postForetagInfo")
    
    try{
       const response = await fetch(`http://localhost:5000/annonsApi/foretagpost/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
       });
       console.log("response", response);
       return response;
       
    }
    catch (error){
        console.log("fångade ett error när ngt skulle uppdateras! här är det");
        console.log("error från postForetagInfo: ", error);
        
    }

}