export const getAnnonsorById = async (id) => {
    console.log("id", id);

    try {

        const response = await fetch(`http://localhost:5000/annonsApi/annonsorget/${id}`);
        console.log("response", response);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("fångade ett error när ngt skulle hämtas här är det");
        console.log(error);
    }

}


export const putAnnonsorInfo = async (payload) => {

    try {
        const response = await fetch(`http://localhost:5000/annonsApi/foretagput`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        return response.json();
    }
    catch (error) {
        console.log("fångade ett error när ngt skulle uppdateras! här är det");
        console.log(error);

    }

}


export const postAnnons = async (payload) => {
    try {
        console.log("i postannons")
        const response = await fetch(`http://localhost:5000/annonsApi/annonspost`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        console.log("i annonsapi", response);
        return response.json();
    }
    catch (error) {
        console.log("Error i try catch");
        console.log(error);

export const postAnnons = async(payload) =>{

    try{
       const response = await fetch(`http://localhost:5000/annonsApi/postannons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
       });
       return response.json();
    }
    catch (error){
        console.log("fångade ett error när ngt skulle läggas in! här är det");
        console.log(error);
        
    }

}