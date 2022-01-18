const Validator = require("validator");
const isEmpty = require("is-empty");
const validUrl = require('valid-url');
module.exports = function validatePostForm(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator function
    data.password = !isEmpty(data.password) ? data.password : "";
    data.userId = !isEmpty(data.userId) ? data.userId : "";
    data.userName = !isEmpty(data.userName) ? data.userName : "";

    if(Validator.isEmpty(data.userId)){
        errors.userId = "Empty UserData"
    }

    if(Validator.isEmpty(data.title)){
        errors.title = "Empty title"
    }

    // Password checks
    if (Validator.isEmpty(data.description)) {
        errors.description = "Empty description";
    }

    if(Validator.isEmpty(data.price)){
        errors.price = "Empty price"
    }

    if(Validator.isEmpty(data.negotiate)){
        errors.negotiate = "Empty negotiate"
    }

    if(Validator.isEmpty(data.condition)){
        errors.condition = "Empty condition"
    }

    if(Validator.isEmpty(data.usedFor)){
        errors.usedFor = "Empty usedFor"
    }

    if(Validator.isEmpty(data.category)){
        errors.category = "Please select a category"
    }

    if(Validator.isEmpty(data.subcategory)){
        errors.subcategory = "Please select a subcategory"
    }

    if(Validator.isEmpty(data.maincategory)){
        errors.maincategory = "Please select a maincategory"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};