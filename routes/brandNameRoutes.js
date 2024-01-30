const express = require('express');
const router = express.Router();
const brandNameController = require('../controllers/brandNamesController');

// Route to create a new brand name
router.post('/', brandNameController.createBrandName);

// Route to get all brand names
router.get('/', brandNameController.getAllBrandNames);

// Route to get a single brand name by ID
router.get('/:id', brandNameController.getBrandNameById);

// Route to update a brand name by ID
router.patch('/:id', brandNameController.updateBrandNameById);

// Route to delete a brand name by ID
router.delete('/:id', brandNameController.deleteBrandNameById);

module.exports = router;