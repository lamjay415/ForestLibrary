const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {
    let errors = {};

    data.review = validText(data.review) ? data.review : ''

    // Reviews can be optional
    //  if(!Validator.isEmpty(data.review)){
    //     errors.review = "Review is required"
    // }

    if(!Validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}