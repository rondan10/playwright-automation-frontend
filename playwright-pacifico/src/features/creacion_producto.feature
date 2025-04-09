Feature: Agregar Productos

  @agregar_productos
  Scenario: Agregar un producto al carrito y realizar el checkout
    Given que estoy en la página de saucedemo
    When ingreso mis credenciales username "standard_user" y password "secret_sauce"
    Then el inicio de sesión es satisfactorio
    When agrego un producto al carrito
    And abro el carrito
    Then realizo el checkout