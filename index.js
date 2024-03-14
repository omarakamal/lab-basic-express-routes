const express = require('express')

const app = express()

// let roleModel = {
//     name: "Daniele",
//     occupation: "Engineer",
//     languages:["Italian", "English"]
//   }


app.listen(5006)

// app.get('/role-model', (req, res)=>{
//     res.json(roleModel)
// })

app.get('/role-model', (req, res)=>{
    res.json({name: "Daniele", occupation: "Engineer", languages:["Italian", "English"]})
})