const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database");

const app = express();
dotenv.config({ path: ".env" });
const port = process.env.PORT || 8080;
app.use(cors());
connectDB();

app.get("/", (req, res) => res.send("Hello!"));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
