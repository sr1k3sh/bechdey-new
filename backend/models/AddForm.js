const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate-v2");
// create schema
const addFormSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    userDetail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
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
    location:{
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


addFormSchema.plugin(mongoosePaginate);

module.exports = AddForm = mongoose.model("addform", addFormSchema);