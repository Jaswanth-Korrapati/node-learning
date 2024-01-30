//schema: id, productTypeId, productName, productSize, productColor, brandId, isActive, createDate, modifiedDate

const mongoose=require("mongoose");

const productDetailsSchema=mongoose.Schema({

    productTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productTypes',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productSize: String,
    productColor: String,
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brandNames',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
    
},{timestamps: true});

module.exports=mongoose.model("productDetails",productDetailsSchema);

