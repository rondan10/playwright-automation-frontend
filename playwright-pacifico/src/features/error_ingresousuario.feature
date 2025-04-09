Feature: Inicio de sesión con error

  @login_error
  Scenario: Intentar iniciar sesión con credenciales incorrectas
    Given que estoy en la página de saucedemo
    When ingreso mis credenciales username "locked_out_user" y password "secret_sauce"
    Then el inicio de sesión no es exitoso