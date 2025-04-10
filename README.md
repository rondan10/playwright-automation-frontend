# Playwright Pacifico

Este proyecto utiliza **Playwright** y **Cucumber** para realizar pruebas automatizadas de una aplicación web. Incluye escenarios para inicio de sesión, manejo de errores, agregar productos al carrito y realizar el checkout.

---

## **Requisitos**

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)
- Un navegador compatible (Chrome, Firefox, etc.)

---

## **Instalación**

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/playwright-automation-frontend.git

2. cd playwright-pacifico
3. npm install
4. npx playwright install

## **Running Tests**

Ejecutar los test:
```
npm run test-dev
```

## **Escenarios implementados**

1. Inicio de sesión exitoso
Archivo: ingreso_usuario.feature

Given: que estoy en la página de saucedemo
When: ingreso mis credenciales username "standard_user" y password "secret_sauce"
Then: el inicio de sesión es satisfactorvscode_annotation>
2. Manejo de errores en el inicio de sesión
Archivo: error_ingresousuario.feature

Given: que estoy en la página de saucedemo
When: ingreso mis credenciales username "locked_out_user" y password "secret_sauce"
Then: el inicio de sesión no es exitoso
3. Agregar productos al carrito
Archivo: agregar_producto.feature

Given: que estoy en la página de saucedemo
When: ingreso mis credenciales username "standard_user" y password "secret_sauce"
Then: el inicio de sesión es satisfactorio
When: agrego un producto al carrito
And: abro el carrito
Then: realizo el checkout
4. Proceso de checkout
Archivo: checkout_producto.feature

Given: Estoy en la página de checkout
When: Completo el formulario de checkout con nombre "Juan", apellido "Pérez" y código postal "12345"
Then: Continuo dando click al siguiente botón
Then: Finalizo el checkout dando click en el botón de finalizar
Then: Regreso a la página de productos dando click en el botón de regresar
