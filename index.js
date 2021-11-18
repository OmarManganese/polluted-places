const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database");
const pollutedPlacesRouter = require("./routes/pollutedPlacesRoutes");

const app = express();
dotenv.config({ path: ".env" });
const port = process.env.PORT || 8080;
app.use(cors());
connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/polluted-places", pollutedPlacesRouter);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
