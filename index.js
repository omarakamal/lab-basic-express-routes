console.log("test");

const express = require("express");
const app = express();

let roleModel = {
  name: "Cristiano Ronaldo",
  occupation: "Footballer",
  languages: ["English", "Portuguese", "Spanish"],
};

app.listen(5005);

app.get("/role-model", (req, res) => {
  res.json(roleModel);
});
