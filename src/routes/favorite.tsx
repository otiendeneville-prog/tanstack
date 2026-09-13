import { saveFavoritePokemonFn } from '#/server/pokemon'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/favorite')({
  component: FavoritePage,
})

function FavoritePage() {
  const[name, setName]= useState('')
  const[status, setStatus]= useState('')

  const savePokemon = useServerFn(saveFavoritePokemonFn)
  return <main className='page-wrap px-4 pb-8 pt-14'>
    <h1>Save a Pokemon </h1> 
  </main>
}
