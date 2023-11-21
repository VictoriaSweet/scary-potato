const router = require("express").Router();
const { Plant, User } = require("../models");
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");


// GET all plants
router.get("/", async (req, res) => {
  try {
    // Get all plants and JOIN with user data
    const plantData = await Plant.findAll({
      attributes: [
        "id",
        "plant_name",
        "edible",
        "poisonous",
        "cycle",
        "watering",
        "sunlight",
        "indoor",
      ],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // Serialize data so the template can read it
    const plants = plantData.map((plant) => plant.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      plants,
      logged_in: req.session.logged_in,
      username: req.session.username,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET single plant
router.get("/plant/:id", async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const plant = plantData.get({ plain: true });

    res.render("plant", {
      ...plant,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    signUpUrl: "/signup",
  });
});

// Signup
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Search
router.post("/search", async (req, res) => {
  // TODO: calls /api/plant/species-list with q
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const host = req.headers.host;
  const q = req.body.q;

  const apiUrl = `http://${host}/api/plant/species-list/${q}`;
  const url = new URL(apiUrl);




  try {
    const response = await fetch(url, requestOptions);
    const results = await response.json();

    // TODO: render search results after getting that response
    res.render("searchResults", {
      plants: results
    });
  } catch (error) {
    console.log('error', error);
  }

});

module.exports = router;
