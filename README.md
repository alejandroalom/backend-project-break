Tienda de Ropa - Proyecto Backend

Proyecto de tienda de ropa con Node.js, Express y MongoDB. 
Permite visualizar productos, filtrarlos por categoría y gestionarlos desde un dashboard como administrador.

las principales funcionalidades es la visualización de productos, que se puedan filtrar por categorías, vista detallada de cada producto, CRUD completo.
la app tiene el dashboard de administración que permite subir los productos, cargar el mismo con imágenes, tallas, precios, etc...
Enrutado HTML y API REST separado (tengo entendido que así debe hacerse)
El CSS busca dar un toque moderno y es responsive

. Enlaces de la app:

[https://backend-project-break-3s17.onrender.com/products](https://backend-project-break-3s17.onrender.com/products)

. Se ha usado:

- Node.js
- Express
- MongoDB + Mongoose
- HTML generado desde servidor (SSR)
- CSS moderno responsive
- Render (para el despliegue)
- GitHub (repositorio del proyecto)

. Pasos para construir la app.

1. lo primero inicializamos el proyecto con `npm init` y estructuramos carpetas: `/routes`, `/controllers`, `/models`, `/public`, `/config`, etc. intentando que este ordenado, limpio y que la organización sea lo más profesional posible.

2. Creamos el archivo `index.js`, donde configuramos Express, middleware, conexión a MongoDB y las rutas principales.

3. En `/models` definimos el modelo `Product` con Mongoose, con los campos básicos: nombre, descripción, precio, categoría, imagen y talla.

4. Creamos un controlador `/controllers/productController.js` con funciones para mostrar los productos, crear, editar, borrar y ver detalle.

5. Creamos rutas para vistas HTML (`/products`, `/dashboard`, etc.) y otras rutas independientes para API REST (`/api/products`, etc.)
El proyecto diferencia entre rutas que devuelven HTML (como `/products`) y rutas API que devuelven JSON (como `/api/products`).
Esto se hace para separar la lógica de presentación (lo que ve el usuario final en el navegador) de la lógica de datos.  
leí que era una buena práctica para que el backend está pueda escalar y ser reutilizable. Aunque no sé realmente si es correcto!

6. Usamos la librería `method-override` para que lkos formularios puedan hacer el PUT y el DELETE.

7. Creamos vistas dinámicas generadas con funciones como `baseHtml`, `getNavBar` y `getProductCards` en la carpeta `/helpers`.

8. Creamos el archivo `.env` para guardar la URI de MongoDB de forma segura y no exponerla en GitHub.
Este es uno de los puntos remarcados por motivos de seguridad. 
La URI de conexión a MongoDB Atlas (`MONGODB_URI`) y el puerto (`PORT`) están configurados como variables de entorno en Render. 
No están subidas al repositorio por seguridad.

9. Desplegamos en Render configurando variables de entorno y puerto.
Aquí tuve un problema con mongoDB y la cuenta de GitHub, al final tuve que abrirme otra cuenta de mongo y volver a hacer parte del proyecto.
Al principio daba un error al anclar la cuenta de GitHub por un error con el email. comprobé que el mismo estuviera validado y publico pero con todo seguía, no quedo más remedio que volver a atrás.

10. En Render, cambie el archivo styles.css de toda la vida a styles-v2.css para que se actualizase correctamente. 
Fue una solución manual porque Render a veces cachea el antiguo si el nombre no cambia. al final el error venia por otro lado pero se solucionó y se aprovecho para hacer responsive el diseño con media queries y una fuente moderna (`Segoe UI`, `Poppins`) y tocarlo un poquito.  

. Variables de entorno

Este proyecto utiliza variables de entorno para proteger información sensible.

. Autor del proyecto

- Nombre: Alejandro Alom
- Stack: Node.js, Express, MongoDB, HTML SSR y CSS

Trabajo realizado durante el bootcamp FullStack como proyecto final de backend