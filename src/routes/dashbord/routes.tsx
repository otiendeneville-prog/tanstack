import { Outlet } from "@tanstack/react-router"
import { createFileRoute  } from '@tanstack/react-router'

export const Route = createFileRoute('/dashbord/routes')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <aside>
        <p>sidebar</p>
      </aside>
      <aside>
        <Outlet />
    </main>
  )
}
