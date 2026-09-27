describe('Funcionalidade: Login no SauceDemo', () => {

  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    // 1. Abrir a página inicial do e-commerce
    cy.visit('https://www.saucedemo.com/');

    // 2. Preencher o campo de usuário
    cy.get('[data-test="username"]').type('standard_user');

    // 3. Preencher o campo de senha
    cy.get('[data-test="password"]').type('secret_sauce');

    // 4. Clicar no botão de login
    cy.get('[data-test="login-button"]').click();

    // 5. Validar que o login foi realizado (Asserções)
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

});