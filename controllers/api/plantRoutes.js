const router = require('express').Router();
const { Plant } = require('../../models');
// const axios = require('axios'); // You may need to install axios via npm

// Define the route handling the GET request
router.get('/species-list/:q', async (req, res) => {
  try {

    // Make a GET request to the external API
    const response = await fetchSpeciesList(req.params.q);

    // Send the data received from the external API as the response
    res.json(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const fetchSpeciesList = async (q, sunlight, watering, poisonous, edible, cycle, indoor) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const API_KEY = 'sk-ZD8U655d52de723ba3065'; // Replace with your actual API key
  const apiUrl = `https://perenual.com/api/species-list?key=${API_KEY}`;
  const url = new URL(apiUrl);

  if (q) url.searchParams.append('q', q);

  try {
    const response = await fetch(url, requestOptions);
    return await response.json();
  } catch (error) {
    console.log('error', error);
  }
}

module.exports = router;
