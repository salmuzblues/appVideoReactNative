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
 async getMovies(){
    // calling the query from the api by id  
    const query= await fetch(`${BASE_API}list_movies.json`); 
    // this query is going to retrieve a method JSON 
    const { data }= await query.json();  // Aqui se pone { } para poder obtener objetos del data 
    console.log(data); 
    return data.movies;  
}

async searchMovie(title) {
    
// calling the query from the api by id  
const query= await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`); 
// this query is going to retrieve a method JSON 
const { data }= await query.json();  // Aqui se pone { } para poder obtener objetos del data 
console.log(data); 
return data.movies; 
    
}

}

export default new Api(); 