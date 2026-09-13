import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/favorite')({
  component: FavoritePage,
})

function FavoritePage() {
  const[name, setName]= useState('')
  const[status, setStatus]= useState('')
  return <div>Hello "/favorite"!</div>
}
