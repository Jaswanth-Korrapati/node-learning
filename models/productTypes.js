//schema: id, productType, isActive, createDate, modifiedDate


const mongoose= require("mongoose");

const productTypeSchema=mongoose.Schema({

    productType: {
        type: String,
        allowNull: false
      },
      isActive: {
        type: Boolean,
        allowNull: false,
        defaultValue: false
      }




},{timestamps: true});

module.exports=mongoose.model("ProductType",productTypeSchema);