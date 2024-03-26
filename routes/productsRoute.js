const express = require("express");
const {
  getProducts,
  createProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productsController");
const router =  express.Router();


router.route("/").get(getProducts).post(createProducts);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);


module.exports = router