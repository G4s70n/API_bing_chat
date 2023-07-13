
function associateModels(models) {
  models.actors.belongsToMany(models.movies, { through: 'actors_movies' });
  models.movies.belongsToMany(models.actors, { through: 'actors_movies' });
}

module.exports = { associateModels };  

