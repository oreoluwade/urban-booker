describe('Home Page', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:4555');
    cy.intercept(
      'GET',
      'https://storage.googleapis.com/urban-technical/slots.json',
      {
        fixture: 'slots.json'
      }
    ).as('getSlots');
    cy.intercept(
      'GET',
      'https://storage.googleapis.com/urban-technical/workers.json',
      {
        fixture: 'workers.json'
      }
    ).as('getWorkers');
    cy.intercept(
      'GET',
      'https://storage.googleapis.com/urban-technical/available-workers.json',
      {
        fixture: 'available-workers.json'
      }
    ).as('getAvailableWorkers');
    cy.visit('/');
    cy.wait('@getSlots');
  });

  it('should render the home page and display a message', () => {
    cy.get('h1').contains('Welcome to our scheduling page');
  });

  it('Clicking on the cart icon should redirect to the cart page', () => {
    cy.get('[data-cy="cart_link"]').click();
  });

  it('Clicking on a slot should direct you to page for available workers', () => {
    cy.get('[data-cy="slot_1"]').click();
    cy.wait('@getAvailableWorkers');
  });
});

export {};
