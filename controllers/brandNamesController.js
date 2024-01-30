const BrandName = require('../models/brandNames');

// Create a new brand name
exports.createBrandName = async (req, res) => {
  try {
    const { brandName, isActive } = req.body;
    const newBrandName = new BrandName({
      brandName,
      isActive
    });
    const savedBrandName = await newBrandName.save();
    res.status(201).json(savedBrandName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all brand names
exports.getAllBrandNames = async (req, res) => {
  try {
    const brandNames = await BrandName.find();
    res.json(brandNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single brand name by ID
exports.getBrandNameById = async (req, res) => {
  try {
    const brandName = await BrandName.findById(req.params.id);
    if (!brandName) {
      return res.status(404).json({ message: 'Brand name not found' });
    }
    res.json(brandName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a brand name by ID
exports.updateBrandNameById = async (req, res) => {
  try {
    const { brandName, isActive } = req.body;
    const updatedBrandName = await BrandName.findByIdAndUpdate(
      req.params.id,
      { brandName, isActive },
      { new: true }
    );
    if (!updatedBrandName) {
      return res.status(404).json({ message: 'Brand name not found' });
    }
    res.json(updatedBrandName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a brand name by ID
exports.deleteBrandNameById = async (req, res) => {
  try {
    const deletedBrandName = await BrandName.findByIdAndDelete(req.params.id);
    if (!deletedBrandName) {
      return res.status(404).json({ message: 'Brand name not found' });
    }
    res.json({ message: 'Brand name deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};