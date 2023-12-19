const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/DBConfig");
connectDB();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

const startupRoutes = require("./routes/startupRoutes");

app.use(express.json());

app.use("/api", startupRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Listening on Port " + process.env.PORT);
});
