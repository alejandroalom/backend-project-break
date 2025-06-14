const Product = require("../models/Product");
const getProductCards = require("../helpers/template");
const baseHtml = require("../helpers/baseHtml");
const getNavBar = require("../helpers/getNavBar");

// Mostrar todos los productos (con filtro opcional por categoría)
const showProducts = async (req, res) => {
  try {
    const filtro = {};
    if (req.query.category) {
      filtro.category = req.query.category;
    }

    const products = await Product.find(filtro);
    const cards = getProductCards(products);
    const nav = getNavBar();
    res.send(baseHtml(nav + cards));
  } catch (err) {
    res.status(500).send("Error al obtener productos");
  }
};

// Mostrar un producto por su ID
const showProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).send("Producto no encontrado");
    res.send(baseHtml(`<h1>${product.name}</h1><p>${product.description}</p>`));
  } catch (err) {
    res.status(500).send("Error al buscar producto");
  }
};

// Mostrar formulario para nuevo producto
const showNewProduct = (req, res) => {
  const html = `
    <h1>Subir nuevo producto</h1>
    <form action="/dashboard" method="POST">
      <label>Nombre:</label>
      <input type="text" name="name" required /><br>

      <label>Descripción:</label>
      <textarea name="description"></textarea><br>

      <label>URL de imagen:</label>
      <input type="text" name="image" /><br>

      <label>Categoría:</label>
      <select name="category">
        <option value="Camisetas">Camisetas</option>
        <option value="Pantalones">Pantalones</option>
        <option value="Zapatos">Zapatos</option>
        <option value="Accesorios">Accesorios</option>
      </select><br>

      <label>Talla:</label>
      <select name="size">
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select><br>

      <label>Precio:</label>
      <input type="number" name="price" step="0.01" required /><br>

      <button type="submit">Crear producto</button>
    </form>
  `;

  res.send(baseHtml(html));
};

// Guardar nuevo producto en la base de datos
const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.redirect("/products");
  } catch (err) {
    res.status(500).send("Error al crear producto");
  }
};

// Dashboard con todos los productos (modo admin)
const showDashboard = async (req, res) => {
  try {
    const products = await Product.find();
    let html = `
      <h1>Dashboard del administrador</h1>
      <a href="/dashboard/new" class="btn-admin">+ Añadir nuevo producto</a>
      <div class="product-list">
    `;

    for (let product of products) {
      html += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p><strong>${product.price}€</strong></p>
          <a href="/dashboard/${product._id}/edit">✏️ Editar</a>
          <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST" style="display:inline;">
            <button type="submit">🗑️ Borrar</button>
          </form>
        </div>
      `;
    }

    html += `</div>`;
    res.send(baseHtml(html));
  } catch (err) {
    res.status(500).send("Error al cargar el dashboard");
  }
};

// Mostrar formulario para editar producto
const showEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).send("Producto no encontrado");

    const html = `
      <h1>Editar producto</h1>
      <form action="/dashboard/${product._id}?_method=PUT" method="POST">
        <label>Nombre:</label>
        <input type="text" name="name" value="${product.name}" required /><br>

        <label>Descripción:</label>
        <textarea name="description">${product.description}</textarea><br>

        <label>URL de imagen:</label>
        <input type="text" name="image" value="${product.image}" /><br>

        <label>Categoría:</label>
        <input type="text" name="category" value="${product.category}" /><br>

        <label>Talla:</label>
        <input type="text" name="size" value="${product.size}" /><br>

        <label>Precio:</label>
        <input type="number" name="price" step="0.01" value="${product.price}" required /><br>

        <button type="submit">Guardar cambios</button>
      </form>
    `;

    res.send(baseHtml(html));
  } catch (err) {
    res.status(500).send("Error al mostrar el formulario de edición");
  }
};

// Actualizar producto en la base de datos
const updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.productId, req.body);
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).send("Error al actualizar el producto");
  }
};

// Eliminar producto de la base de datos
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).send("Error al borrar el producto");
  }
};

// Exportamos todas las funciones para usarlas en las rutas
module.exports = {
  showProducts,
  showProductById,
  showNewProduct,
  createProduct,
  showDashboard,
  showEditProduct,
  updateProduct,
  deleteProduct
};




