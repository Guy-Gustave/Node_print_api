console.log("first, this is node")
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(errorHandler)
app.use("/api/products", require("./routes/productsRoute"))


app.listen(port, ()=> {
  console.log(`server running on port ${port}`)
}); 