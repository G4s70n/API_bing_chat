const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('movies', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        director: {
          type: DataTypes.STRING,
          allowNull: false
        },
        year: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        
      }
      )
};


