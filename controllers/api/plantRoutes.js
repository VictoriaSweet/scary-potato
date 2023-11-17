const router = require('express').Router();
const { Plant } = require('../../models');
// const axios = require('axios'); // You may need to install axios via npm

// Define the route handling the GET request
router.get('/species-list', async (req, res) => {
  try {
    const API_KEY = 'sk-l9HY654e6939256ac2895'; // Replace with your actual API key
    const apiUrl = `https://perenual.com/api/species-list?key=${API_KEY}`;

    // Make a GET request to the external API
    const response = await axios.get(apiUrl);

    // Send the data received from the external API as the response
    res.json(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
