const axios = require("axios");

const API_BASE_URL =
  process.env.HP_API_URL || "https://hp-api.onrender.com/api";

// Get all characters
const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all characters:", error.message);
    throw new Error("Failed to fetch characters");
  }
};

// Get character by ID
const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/character/${id}`);
    return response.data[0]; // API returns an array with a single character
  } catch (error) {
    console.error(`Error fetching character with ID ${id}:`, error.message);
    throw new Error("Failed to fetch character");
  }
};

// Get Hogwarts students
const getHogwartsStudents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters/students`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Hogwarts students:", error.message);
    throw new Error("Failed to fetch Hogwarts students");
  }
};

// Get Hogwarts staff
const getHogwartsStaff = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters/staff`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Hogwarts staff:", error.message);
    throw new Error("Failed to fetch Hogwarts staff");
  }
};

// Get characters by house
const getCharactersByHouse = async (house) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/characters/house/${house}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching characters for house ${house}:`,
      error.message
    );
    throw new Error(`Failed to fetch ${house} members`);
  }
};

// Get all spells
const getAllSpells = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/spells`);
    return response.data;
  } catch (error) {
    console.error("Error fetching spells:", error.message);
    throw new Error("Failed to fetch spells");
  }
};

module.exports = {
  getAllCharacters,
  getCharacterById,
  getHogwartsStudents,
  getHogwartsStaff,
  getCharactersByHouse,
  getAllSpells,
};
