const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
