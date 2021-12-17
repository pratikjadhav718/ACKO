const express = require("express");

const connect = require("./config/db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const carController = require("./controllers/car.controller");

app.use("/cars", carController);


app.get("/", (req, res) => {
    return res.send("Hello")
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  connect();
  console.log(`server connected to port : ${port}`);
});
