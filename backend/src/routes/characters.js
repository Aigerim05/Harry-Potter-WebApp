const express = require("express");
const router = express.Router();
const harryPotterService = require("../services/harryPotterService");

// GET all characters
router.get("/", async (req, res) => {
  try {
    const characters = await harryPotterService.getAllCharacters();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Hogwarts students
router.get("/hogwarts/students", async (req, res) => {
  try {
    const students = await harryPotterService.getHogwartsStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Hogwarts staff
router.get("/hogwarts/staff", async (req, res) => {
  try {
    const staff = await harryPotterService.getHogwartsStaff();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET characters by house
router.get("/house/:house", async (req, res) => {
  try {
    const houseMembers = await harryPotterService.getCharactersByHouse(
      req.params.house
    );
    res.json(houseMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET character by ID
router.get("/:id", async (req, res) => {
  try {
    const character = await harryPotterService.getCharacterById(req.params.id);
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
