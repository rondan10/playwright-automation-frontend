Feature: Creación de Empleado

@creacion_empleado
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de saucedemo
    When ingreso mis credenciales username "standard_user" y password "secret_sauce"
    Then el inicio de sesión es satisfactorio