const express = require ("express");

const app = express();

let roleModel = {
    name: "Spongebob Squarepants",
    occupation: "Sponge",
    languages:["English"],
    home: "Bikini Bottom",
    friends: ["patrick", "squidward", "sandy", "mr. crabs"]
  }

app.get("/role-model", (req, res)=>{
    res.json(roleModel);
});

app.listen(5005,()=>{
    console.log("listening on port 5005..");
});