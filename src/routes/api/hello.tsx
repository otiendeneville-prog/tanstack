import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: async ({request})=>{
        console.log("Someone hit our public API!")
      }
      
    }
  }
})

