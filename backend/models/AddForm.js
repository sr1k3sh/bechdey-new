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
    },
    category:{
        type:String,
        required:true
    },
    subcategory:{
        type:String,
        required:true
    },
    maincategory:{
        type:String,
        required:true
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: Array,
        required: [true, "Uploaded file must have a name"],
    },

});
module.exports = User = mongoose.model("addform", addFormSchema);