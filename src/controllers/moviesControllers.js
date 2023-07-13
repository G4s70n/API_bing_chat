const { movies } = require('../db.js');

const moviesCreator = async (title, director, year) => {
  try {
    const movie = await movies.create({
      title,
      director,
      year
    });
    return movie;
  } catch (error) {
    throw new Error(`Error creating movie: ${error.message}`);
   
  }
};

module.exports = {
  moviesCreator
};
