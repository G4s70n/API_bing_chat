const { body, validationResult } = require('express-validator');



// Validaciones para crear una película
const createMovieValidator = [
    body('title').notEmpty().withMessage('Title cannot be empty'),
    body('director').notEmpty().withMessage('Director cannot be empty'),
    body('year').isInt({ min: 1900, max: 2023 }).withMessage('Year must be a valid integer between 1900 and 2023')
  ];
  




  module.exports = {
    createMovieValidator,
    validationResult
  };