const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/bookRoute");

const database = process.env.DATABASE;
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

mongoose.connect(database).then(() => {
  console.log("Database Connected !!!");
});
app.listen(port, () => {
  console.log(`Run Server At Port ${port}`);
});
