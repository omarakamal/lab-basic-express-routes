console.log("test")

const express = require('express')

const app = express()


let roleModel = {
    name: "Enissa Amani",
    occupation: "Activist and Comedian",
    languages: ["German", "English", "Farsi"]
}

app.get("/roleModel", (req, res)=>{
    res.json(roleModel)
})

app.listen(5005)