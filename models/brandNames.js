
//schema: id, brandName, isActive, createDate, modifiedDate

const mongoose= require("mongoose");

const brandNameSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{timestamps: true});

module.exports=mongoose.model("brandName",brandNameSchema);