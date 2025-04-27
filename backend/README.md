# Harry Potter Backend API

This Express.js backend serves as a proxy to the Harry Potter API, providing endpoints for the frontend to consume.

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following content:

   ```
   PORT=5000
   HP_API_URL=https://hp-api.onrender.com/api
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Available Endpoints

### Characters

- `GET /api/characters` - Get all characters
- `GET /api/characters/:id` - Get a specific character by ID
- `GET /api/characters/hogwarts/students` - Get all Hogwarts students
- `GET /api/characters/hogwarts/staff` - Get all Hogwarts staff
- `GET /api/characters/house/:house` - Get characters by house (e.g., Gryffindor, Slytherin)

### Spells

- `GET /api/spells` - Get all spells

## Environment Variables

- `PORT` - The port on which the server runs (default: 5000)
- `HP_API_URL` - The base URL of the external Harry Potter API
