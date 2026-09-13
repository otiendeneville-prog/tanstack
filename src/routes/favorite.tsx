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
  return(
  
  <main className='page-wrap px-4 pb-8 pt-14'>
    <h1>Save a Pokemon </h1> 
    <form>
      <input type="text" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className='border-2 rounded'
      placeholder='pikachu'
      />
      <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Save</button>
    </form>
    <p className='mt-4'>{status}</p>
  </main>
  )