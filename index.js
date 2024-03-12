console.log("test")

const express = require('express')
const app = express()

let roleModel = {
    name: "Javier Zanetti",
    occupation: "Footballer",
    languages:["English", "Spanish", "Italian"]
  }

  app.get('/role-model',(request,response)=>{
    response.json(roleModel)
  })

  app.listen(5005)
