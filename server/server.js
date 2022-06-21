const express = require("express");
const cors = require("cors");
const path = require("path"); //heroku isn't smart enough so this connects our file structure

const app = express();
app.use(cors());
app.use(express.json()); //without this express doens't know how to accept .json correctly

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/styles", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.css"));
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`I'll be right by your side, 'til ${port}`);
});
