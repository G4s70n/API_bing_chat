const { Router } = require("express");
const router = Router();
const { moviesCreator } = require("../controllers/moviesControllers.js");
const { createMovieValidator, validationResult } = require('../validations/moviesValidator')





router.post("/",createMovieValidator, async (req, res, next) => {

  try {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }


    let { title, director, year } = req.body;
    const moviesCreated = await moviesCreator(title, director, year );
    res.send("Actividad created succesfully");

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});






module.exports = router;
