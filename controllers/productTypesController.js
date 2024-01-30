const ProductType = require('../models/productTypes');
// Create a new product type
exports.createProductType = async (req, res) => {
    try {
      const { productType, isActive } = req.body;
      const newProductType = new ProductType({
        productType,
        isActive
      });
      const savedProductType = await newProductType.save();
      res.status(201).json(savedProductType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get all product types
  exports.getAllProductTypes = async (req, res) => {
    try {
      const productTypes = await ProductType.find();
      res.json(productTypes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a single product type by ID
  exports.getProductTypeById = async (req, res) => {
    try {
      const productType = await ProductType.findById(req.params.id);
      if (!productType) {
        return res.status(404).json({ message: 'Product type not found' });
      }
      res.json(productType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update a product type by ID
  exports.updateProductTypeById = async (req, res) => {
    try {
      const { productType, isActive } = req.body;
      const updatedProductType = await ProductType.findByIdAndUpdate(
        req.params.id,
        { productType, isActive },
        { new: true }
      );
      if (!updatedProductType) {
        return res.status(404).json({ message: 'Product type not found' });
      }
      res.json(updatedProductType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete a product type by ID
  exports.deleteProductTypeById = async (req, res) => {
    try {
      const deletedProductType = await ProductType.findByIdAndDelete(req.params.id);
      if (!deletedProductType) {
        return res.status(404).json({ message: 'Product type not found' });
      }
      res.json({ message: 'Product type deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };