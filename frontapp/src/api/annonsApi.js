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