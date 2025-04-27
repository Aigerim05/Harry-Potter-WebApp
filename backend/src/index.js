const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Import routes
const charactersRoutes = require("./routes/characters");
const spellsRoutes = require("./routes/spells");

// Create Express app
const app = express();

// Define port
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/characters", charactersRoutes);
app.use("/api/spells", spellsRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Harry Potter API Backend");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
