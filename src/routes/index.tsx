import { createFileRoute } from '@tanstack/react-router'
import SkillCard from '#/components/SkillCard';


export const Route = createFileRoute('/')({ component: Home })

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
