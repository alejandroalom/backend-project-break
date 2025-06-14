const mongoose = require("mongoose");
 
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  image: String,
  category: {
    type: String,
    enum: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"]
  },
  size: {
    type: String,
    enum: ["XS", "S", "M", "L", "XL"]
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
