const express = require("express");
const router = express.Router();

const {
  showProducts,
  showProductById,
  showNewProduct,
  createProduct,
  showDashboard,
  showEditProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.get("/products", showProducts);

router.get("/products/:productId", showProductById);

router.get("/dashboard/new", showNewProduct);

router.post("/dashboard", createProduct);

router.get("/dashboard", showDashboard);

router.get("/dashboard/:productId/edit", showEditProduct);

router.put("/dashboard/:productId", updateProduct);

router.delete("/dashboard/:productId/delete", deleteProduct);

module.exports = router;



