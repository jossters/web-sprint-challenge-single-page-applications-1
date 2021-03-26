describe('User-onboarding app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    const nameInput = () => cy.get('[name="name"]');
    const specialInput = () => cy.get('[name="special"]');

    const pepperoniCheckBox = () => cy.get('[name="pepperoni"]');
    const sausageCheckBox = () => cy.get('[name="sausage"]');
    const pineappleCheckBox = () => cy.get('[name="pineapple"]');
    const onionsCheckBox = () => cy.get('[name="onions"]');
    const chickenCheckBox = () => cy.get('[name="chicken"]')
  
    const orderButt = () => cy.get('.order-pizza');
    const confirmButt = () => cy.get('.confirm-butt');
  
    const dropdown = () => cy.get('.dropdown');
  
    it('tester', () => {
      expect(1 + 1).to.equal(2);
    });
    it('Form TESTING WOOOO', () => {
      orderButt().click();
      nameInput().type('test').should('have.value', 'test');
      pepperoniCheckBox().should('not.be.checked');
      sausageCheckBox().should('not.be.checked');
      pineappleCheckBox().should('not.be.checked');
      onionsCheckBox().should('not.be.checked');
      chickenCheckBox().should('not.be.checked');

      pepperoniCheckBox().check();
      sausageCheckBox().check();
      pineappleCheckBox().check();
      onionsCheckBox().check();
      chickenCheckBox().check();

      specialInput().type('test');
      specialInput().should('have.value', 'test');
      confirmButt().should('be.disabled');
      dropdown().select('large');
      confirmButt().click();
      nameInput().should('have.value', '');

      pepperoniCheckBox().should('not.be.checked');
      sausageCheckBox().should('not.be.checked');
      pineappleCheckBox().should('not.be.checked');
      onionsCheckBox().should('not.be.checked');
      chickenCheckBox().should('not.be.checked');
    });
  });

    