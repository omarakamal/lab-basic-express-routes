const express= require('express')
const app= express()

let roleModel = {
    name: "Angelina Jolie",
    occupation: "Actor",
    languages:["English"]
  }

app.get('/role-model',(request,response)=>{
    response.json(roleModel)
})

app.listen(5005)