const express = require("express");
const router = express.Router();
const harryPotterService = require("../services/harryPotterService");

// GET all spells
router.get("/", async (req, res) => {
  try {
    const spells = await harryPotterService.getAllSpells();
    res.json(spells);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
