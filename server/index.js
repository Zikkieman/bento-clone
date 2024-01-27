const express = require("express");
const cors = require("cors");
const createUser = require("../src/api/newUser.js")
const loginUser = require("../src/api/loginUser.js")

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/newUser", createUser);
app.use("/api/loginUser", loginUser);



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
