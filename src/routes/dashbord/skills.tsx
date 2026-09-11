import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashbord/skills')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashbord/skills"!</div>
}
