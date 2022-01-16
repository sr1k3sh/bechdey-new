const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const addFormSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    },
    negotiate:{
        type:Boolean,
        required:true,
    },
    condition:{
        type:String,
        required:true
    },
    usedFor:{
        type:String,
        required:true
    }

});
module.exports = User = mongoose.model("addform", addFormSchema);