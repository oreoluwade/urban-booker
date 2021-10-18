describe('Workers Page', () => {
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
      'https://storage.googleapis.com/urban-technical/available-workers.json',
      {
        fixture: 'available-workers.json'
      }
    ).as('getAvailableWorkers');
    cy.visit('/');
    cy.wait('@getSlots');
  });

  it('Should select an available worker to add the user to the cart', () => {
    cy.get('[data-cy="slot_1"]').click();
    cy.wait('@getAvailableWorkers');

    cy.get('[data-cy="worker_1"]').click();
  });

  it('Open the cart to view the added item', () => {
    cy.get('[data-cy="slot_1"]').click();
    cy.wait('@getAvailableWorkers');

    cy.get('[data-cy="worker_1"]').click();
    cy.get('[data-cy="cart_link"]').click();
  });

  it('Should remove an added item when the cancel button is clicked', () => {
    cy.get('[data-cy="slot_1"]').click();
    cy.wait('@getAvailableWorkers');

    cy.get('[data-cy="worker_1"]').click();
    cy.get('[data-cy="cart_link"]').click();
    cy.get('[data-cy="remove_item_0"]').click();
  });
});

export {};
