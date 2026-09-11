import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashbord/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashbord/"!</div>
}
