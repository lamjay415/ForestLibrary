const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
    let errors = {};
  
    data.title = validText(data.title) ? data.title : '';
  
    if (!Validator.isLength(data.title, { min: 1, max: 100 })) {
      errors.title = 'Title must be between 1 to 100 characters';
    }
  
    if (Validator.isEmpty(data.title)) {
      errors.title = 'Title field is required';
    }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };