const asyncHandler = require("express-async-handler")

// @desc Get all products
// @route GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({message: "Get all products"});
});

// @desc Create products
// @route POST /api/products
// @access public
const createProducts = asyncHandler(async (req, res) => {
  console.log("the request body:", req.body)

  const {productName, price, expiredDate, type} = req.body;
  const product = await Product.create({
    productName, price, expiredDate, type
  })
  res.status(201).json({message: " product created successifully"});
});

const getProduct = asyncHandler(async (req, res) => {
  const product = Product.findById(req.params.id)
  if (!product ) {
    res.status(404)
    throw new console.Error("Contact not found");
  }
  res.status(200).json({message: `Get product for ${req.params.id}`});
});

const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({message: `update product for ${req.params.id}`})
});

const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete product for ${req.params.id}`})
});

module.exports = {getProducts, createProducts, getProduct, updateProduct, deleteProduct}