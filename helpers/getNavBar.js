function getNavBar() {
  return `
    <div class="navbar">
      <a href="/products">Todos</a>
      <a href="/products?category=Camisetas">Camisetas</a>
      <a href="/products?category=Pantalones">Pantalones</a>
      <a href="/products?category=Zapatos">Zapatos</a>
      <a href="/products?category=Accesorios">Accesorios</a>
      <a href="/dashboard">Dashboard</a>
    </div>
  `;
}

module.exports = getNavBar;
