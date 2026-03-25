const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App is running!");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => console.log("Running on port 3000"));