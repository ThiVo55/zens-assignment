const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*'
}));
app.use("/", [require("./src/jokes/jokes.router")]);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port 127.0.0.1:${PORT}.`);
});
