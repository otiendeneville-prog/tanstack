import { createServerFn } from "@tanstack/react-start";


const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'


export const getPokemonFn = createServerFn({ method:'GET'}).handler(async() =>{

    const response = await fetch(POKE_API_URL);
   const data = await response.json();
           console.log('Executing a secure database/API call on a server...');
        if(!data.results || data.results.length == 0){
            throw notFound();
        }
   
        return data;
})