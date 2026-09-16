import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
  head: () =>({
    meta:[
      {title: 'Contact Page: Agent Skills'},
      {
        name: 'description',
        content:'Reach out to us on the contact below'
      }
    ]
  })
})

function RouteComponent() {
  return <div>Hello "/contact"!</div>
}
