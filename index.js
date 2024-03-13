const express = require("express") // instala express

const app = express() //lo convierte en una const. 

let roleModel = {
    name: "Margot Robbie",
    occupation: "Actor",
    languages:["English"]
  }
  app.listen(5005)

  app.get("/role-model", (request, response)=>{
      response.json(roleModel)
  })
  console.log("runing")