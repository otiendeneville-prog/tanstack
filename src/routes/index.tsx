import { createFileRoute } from '@tanstack/react-router'
import SkillCard from '#/components/SkillCard';


export const Route = createFileRoute('/')({ 
  component: Home,
  loader: async () =>{
    console.log('Loading data for / route...')
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
