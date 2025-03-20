require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cardRoutes = require("./routes/cardRoutes");
const cors = require("cors");

app.use(cors());  // Enable CORS for cross-origin requests from frontend

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());

app.use("/cards", cardRoutes);

app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});