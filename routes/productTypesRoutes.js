const express = require('express');
const router = express.Router();
const productTypeController = require('../controllers/productTypesController');

// Route to create a new product type
router.post('/', productTypeController.createProductType);

// Route to get all product types
router.get('/', productTypeController.getAllProductTypes);

// Route to get a single product type by ID
router.get('/:id', productTypeController.getProductTypeById);

// Route to update a product type by ID
router.patch('/:id', productTypeController.updateProductTypeById);

// Route to delete a product type by ID
router.delete('/:id', productTypeController.deleteProductTypeById);

module.exports = router;