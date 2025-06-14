function baseHtml(content) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Mi Tienda</title>
        <link rel="stylesheet" href="/styles-v2.css">
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}

module.exports = baseHtml;
