describe('Funcionalidade: Fluxo de Compra E2E', () => {

  it('Deve adicionar um produto ao carrinho e finalizar o pedido com sucesso', () => {
    // Login
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Adicionar item ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_link').click();

    // Checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('luan');
    cy.get('[data-test="lastName"]').type('rivelo');
    cy.get('[data-test="postalCode"]').type('8555907');
    cy.get('[data-test="continue"]').click();

    // Finalização
    cy.get('[data-test="finish"]').click();

    // Asserção final
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

});