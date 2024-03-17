const express = require("express");
const {
  getProducts,
  createProducts,
  createNewProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productsController");
const router =  express.Router();


router.route("/").get(getProducts).post(createProducts);

router.route("/:id").get(createNewProduct).put(updateProduct).delete(deleteProduct);


module.exports = router