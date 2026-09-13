import { createServerFn } from "@tanstack/react-start";
import { resolve } from "path";


const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'


export const getPokemonFn = createServerFn({ method:'GET'}).handler(async() =>{
    console.log('Executing a secure database/API call on a server...');
   const response = await fetch(POKE_API_URL);
   const data = await response.json();
   console.log('Data succesfully fetched on the server')    
   return data;
})

export const saveFavoritePokemonFn = createServerFn ({method:'POST'}).handler(async(data)=>{()
    .inputValidator((name: string)=> name)
    console.log('Saving data to our secure database...')
    await new Promise((resolve) => setTimeout(resolve,1000));
    return { success:true, saved: data}
})