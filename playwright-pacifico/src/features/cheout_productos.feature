Feature: Checkout de productos

  @checkout
  Scenario: Completar el proceso de checkout
    Given que estoy en la página de saucedemo
    When ingreso mis credenciales username "standard_user" y password "secret_sauce"
    Then el inicio de sesión es satisfactorio
    Then agrego un producto al carrito
    Then abro el carrito
    Then realizo el checkout
    Then Completo el formulario de checkout con nombre "Juan", apellido "Pérez" y codigo postal "12345"
    Then Continuo dando le click al siguiente boton
    Then Finalizo el checkout dando click en el boton de finalizar
    Then Regreso a la pagina de productos dando click en el boton de regresar