console.log('working')

const express = require(`express`)

const app = express()

let roleModel = {
    name: "Dad",
    occupation: "Doctor",
    languages:["Spanish"]
  }

app.get('/roleModel',(request,response)=>{
    console.log('requested')
    response.json(roleModel)

   

})

app.listen(5005)