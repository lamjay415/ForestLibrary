const Validator = require("validator");
const validText = require("./valid-text");
module.exports = function validateLeafInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : "";

    // if(Validator.isEmpty(data.text)) {
    //     errors.text = 'Book name is required';
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};