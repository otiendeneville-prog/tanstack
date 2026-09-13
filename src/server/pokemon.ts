import { createServerFn } from "@tanstack/react-start";

export const getPokemonFn = createServerFn({ method:'GET'}).handler(async() =>{
   const data = await response.json();
   
        if(!data.results || data.results.length == 0){
            throw notFound();
        }
       
   
        console.log('Loader data:', data)
        return data;
})