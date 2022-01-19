const Validator = require("validator");
const isEmpty = require("is-empty");
const validUrl = require('valid-url');
module.exports = function validatePostForm(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator function
   
    data.userId = !isEmpty(data.userId) ? data.userId : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.price = !isEmpty(data.price) ? data.price : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.condition = !isEmpty(data.condition) ? data.condition : "";
    data.usedFor = !isEmpty(data.usedFor) ? data.usedFor : "";
    data.category = !isEmpty(data.category) ? data.category : "";
    data.subcategory = !isEmpty(data.subcategory) ? data.subcategory : "";
    data.maincategory = !isEmpty(data.maincategory) ? data.maincategory : "";
    data.location = !isEmpty(data.location) ? data.location : "";
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

    if(Validator.isEmpty(data.location)){
        errors.location = "Please select a location"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};