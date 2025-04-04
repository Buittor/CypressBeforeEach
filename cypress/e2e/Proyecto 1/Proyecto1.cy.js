import loginPage from "../../pages/loginPage"
import inventoryPage from "../../pages/inventoryPage"
import checkoutPage from "../../pages/checkoutPage"

describe('Login', () => {
  var selector = loginPage()

  beforeEach(() => {
    selector = loginPage() 
    cy.visit('www.saucedemo.com/')
  })

  it('Login Exitoso', () => {
    cy.get(selector.selectorLogin.username).type(selector.userCredentials.usertrue)
    cy.get(selector.selectorLogin.password).type(selector.userCredentials.passwordtrue)
    cy.get(selector.selectorLogin.loginButton).click()
  })
  it('Login Fallido', () => {
    cy.get(selector.selectorLogin.username).type(selector.userCredentials.usertrue)
    cy.get(selector.selectorLogin.password).type(selector.userCredentials.passwordfalse)
    cy.get(selector.selectorLogin.loginButton).click()
    cy.contains(selector.userCredentials.errorMessage).should('be.visible')
  })
})

describe('Añadir productos al carrito', () => {
  var selector = loginPage()
  var selectorinventory = inventoryPage()

  beforeEach(() => {
    selector = loginPage()
    selectorinventory = inventoryPage()
    cy.visit('www.saucedemo.com/')
  })
  it('Comprar 2 productos', () => {
    cy.get(selector.selectorLogin.username).type(selector.userCredentials.usertrue)
    cy.get(selector.selectorLogin.password).type(selector.userCredentials.passwordtrue)
    cy.get(selector.selectorLogin.loginButton).click()
    cy.get(selectorinventory.inventory.backpack).click()
    cy.get(selectorinventory.inventory.bikelight).click()
    cy.get(selectorinventory.inventory.shoppingcar).click()
    cy.get(selectorinventory.inventory.checkout).click()
  })
})
describe('Añadir productos al carrito', () => {
  var selector = loginPage()
  var selectorinventory = inventoryPage()
  var selectorcheckout = checkoutPage()

  beforeEach(() => {
    selector = loginPage()
    selectorinventory = inventoryPage()
    selectorcheckout = checkoutPage()
    cy.visit('www.saucedemo.com/')
  })
  it('Hacer checkout', () => {
    cy.get(selector.selectorLogin.username).type(selector.userCredentials.usertrue)
    cy.get(selector.selectorLogin.password).type(selector.userCredentials.passwordtrue)
    cy.get(selector.selectorLogin.loginButton).click()
    cy.get(selectorinventory.inventory.backpack).click()
    cy.get(selectorinventory.inventory.bikelight).click()
    cy.get(selectorinventory.inventory.shoppingcar).click()
    cy.get(selectorinventory.inventory.checkout).click()
    cy.contains(selectorcheckout.checkout.checkoutMessage).should('be.visible')
  })
})

