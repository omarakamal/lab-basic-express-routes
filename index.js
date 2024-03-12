console.log('working')

const express = require(`express`)

const app = express()

let roleModel = {
    name: "Daddy",
    occupation: "Doctor",
    languages:["Spanih"]
  }

app.get('/roleModel',(request,response)=>{
    console.log('requested')
    response.json(roleModel)

   

})

app.listen(5005)