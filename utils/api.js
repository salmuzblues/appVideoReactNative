const BASE_API = 'https://yts.am/api/v2/'; 

class Api {
// create a function async 
 async getSuggestion(id){
     // calling the query from the api by id  
     const query= await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`); 
     // this query is going to retrieve a method JSON 
     const { data }= await query.json();  // Aqui se pone { } para poder obtener objetos del data 
     console.log(data); 
     return data.movies;  
 }
}

export default new Api(); 