import { createFileRoute } from '@tanstack/react-router'
import SkillCard from '#/components/SkillCard';
import { Router as RouterIcon } from 'lucide-react';



const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const Route = createFileRoute('/')({ 
  component: Home,

  pendingComponent:()=>(
    <div className='p-14 text-center'>
       Loading Pokemon...
    </div>
  ),
  pendingMs:300,
  
  loader: async () =>{
     const response = await fetch(POKE_API_URL) 
     throw new Error('API is down!')
     const data = await response.json();

     console.log('Loader data:', data)
     return data;
  },
  errorComponent: ()=>(
    <div className='p-14 text-red-500'>
      <p>Oops! error</p>
    </div>
  )
 })

function Home() {
   
  const data = Route.useLoaderData();
   
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Hello World! <RouterIcon className='w-6 h-6'></RouterIcon></h1>

      <ul className='mt-6 list-none p-0 space-y-5'>
       {data.results.map((pokemon: {name:string}) =>(
        <li key={pokemon.name}>
            <SkillCard name={pokemon.name}/>
        </li>

       ))}
      </ul>  
    </div>
  )
}
