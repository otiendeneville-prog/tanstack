import { createFileRoute } from '@tanstack/react-router'
import SkillCard from '#/components/SkillCard';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const Route = createFileRoute('/')({ 
  component: Home,
  loader: async () =>{
     const response = await fetch(POKE_API_URL) 
     const data = await response.json();
  }
 })

function Home() {
 
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <ul>
        <li>
          <SkillCard name="TypeScript"/>
        </li>
        <li>
           <SkillCard name="Tanstack Start"/>
        </li>
        <li>
          <SkillCard name="MangoDB" />
        </li>
      </ul>
    </div>
  )
}
