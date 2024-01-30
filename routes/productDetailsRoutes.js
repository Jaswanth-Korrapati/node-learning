const express = require('express');
const router = express.Router();
const productDetailsController = require('../controllers/productDetailsController');

// Route to create a new product details
router.post('/', productDetailsController.createProductDetails);

// Route to get all product details
router.get('/', productDetailsController.getAllProductDetails);

// Route to get a single product details by ID
router.get('/:id', productDetailsController.getProductDetailsById);

// Route to update a product details by ID
router.patch('/:id', productDetailsController.updateProductDetailsById);

// Route to delete a product details by ID
router.delete('/:id', productDetailsController.deleteProductDetailsById);

module.exports = router;
