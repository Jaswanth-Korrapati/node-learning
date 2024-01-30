const ProductDetails = require('../models/productDetails');


// Create a new product details
exports.createProductDetails = async (req, res) => {
  try {
    const { productName, productSize, productColor, isActive } = req.body;
    const newProductDetails = new ProductDetails({
      productTypeId:req.productTypeId,
      productName: productName,
      productSize: productSize,
      productColor: productColor,
      brandId:req.brandId,
      isActive: isActive
    });
    const savedProductDetails = await newProductDetails.save();
    res.status(201).json(savedProductDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all product details
exports.getAllProductDetails = async (req, res) => {
  try {
    const productDetails = await ProductDetails.find();
    res.json(productDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product details by ID
exports.getProductDetailsById = async (req, res) => {
  try {
    const productDetails = await ProductDetails.findById(req.params.id);
    if (!productDetails) {
      return res.status(404).json({ message: 'Product details not found' });
    }
    res.json(productDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product details by ID
exports.updateProductDetailsById = async (req, res) => {
  try {
    const { productTypeId, productName, productSize, productColor, brandId, isActive } = req.body;
    const updatedProductDetails = await ProductDetails.findByIdAndUpdate(
      req.params.id,
      { productTypeId, productName, productSize, productColor, brandId, isActive },
      { new: true }
    );
    if (!updatedProductDetails) {
      return res.status(404).json({ message: 'Product details not found' });
    }
    res.json(updatedProductDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product details by ID
exports.deleteProductDetailsById = async (req, res) => {
  try {
    const deletedProductDetails = await ProductDetails.findByIdAndDelete(req.params.id);
    if (!deletedProductDetails) {
      return res.status(404).json({ message: 'Product details not found' });
    }
    res.json({ message: 'Product details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};