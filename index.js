const express = require("express");
const app = express();
const PORT = 5005;

const roleModel = {
  name: "Jesus",
  occupation: "God",
  languages: ["Hebrew", "Greek"],
};

app.get("/role-model", (request, response) => response.json(roleModel));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
