import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: async ({request})=>{
        console.log("Someone hit our public API!")
        return Response.json({message:'Hello, World!'},{
             headers:{
          "Cache-Control":"public,s-massage=60",
          "Access-Control-Allow-Origin":"*"
        }
        })
       
      }
      
    }
  }
})

