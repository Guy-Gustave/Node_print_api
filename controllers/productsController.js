// @desc Get all products
// @route GET /api/products
// @access public
const getProducts = (req, res) => {
  res.status(200).json({message: "Get all products"});
}

// @desc Create products
// @route POST /api/products
// @access public
const createProducts = (req, res) => {
  res.status(201).json({message: "Create new product"});
}

const createNewProduct = (req, res) => {
  res.status(200).json({message: `Get product for ${req.params.id}`});
}

const updateProduct = (req, res) => {
  res.status(200).json({message: `update product for ${req.params.id}`})
}

const deleteProduct = (req, res) => {
  res.status(200).json({message: `Delete product for ${req.params.id}`})
}

module.exports = {getProducts, createProducts, createNewProduct, updateProduct, deleteProduct}