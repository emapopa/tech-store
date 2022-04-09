const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); // to see in the terminal the http requrst
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// route
app.get("/api", (req, res) => {
  res.json({
    data: "node api",
  });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));