
export const getPrenumerantById = async (id) => {
    console.log("id" , id);
    
    try{
        const response = await fetch(`/api/get/${id}`);
        console.log("response", response);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log("fångade ett error när ngt skulle hämtas här är det");
        console.log(error);
    }

}

export const putPrenumerantInfo = async(payload) =>{

    try{
       const response = await fetch(`/api/put/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
       });
       return response.json();
    }
    catch (error){
        console.log("fångade ett error när ngt skulle uppdateras! här är det");
        console.log(error);
        
    }

}
