import { createServerFn } from "@tanstack/react-start";


const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'


export const getPokemonFn = createServerFn({ method:'GET'}).handler(async() =>{
   const data = await response.json();
   
        if(!data.results || data.results.length == 0){
            throw notFound();
        }
       
   
        console.log('Loader data:', data)
        return data;
})