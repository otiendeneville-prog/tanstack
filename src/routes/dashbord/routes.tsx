import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashbord/routes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashbord/routes"!</div>
}
