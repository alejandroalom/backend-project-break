const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  createProductAPI,
  updateProductAPI,
  deleteProductAPI
} = require("../controllers/apiController");

router.get("/api/products", getAllProducts);

router.get("/api/products/:id", getProductById);

router.post("/api/products", createProductAPI);

router.put("/api/products/:id", updateProductAPI);

router.delete("/api/products/:id", deleteProductAPI);

module.exports = router;
