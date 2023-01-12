/* referencia para usar comandos do cypress, tomar cuidado com bibliotecas typadas*/
/// <reference types="cypress" />

/* O describe é para realizar testes mais longos*/
/* O context é para realizar testes mais curtos*/
/* O it é os cenarios */

describe('To do APP e2e', () => {
    beforeEach(() => {
        cy.visit('/'); // acesso a base url do cypress.config.js
    });
    /* only somente executa primeiro testes(metodos) */
    /* Ex.:
        it.only('Adicionar um item na lista', () => {
            cy.visit('https://todomvc.com/examples/jquery/#/all');
        });
    */
    /* skip pula os testes(metodos) */

    it('Adicionar um item na lista', () => {
        cy.createToDo();
        cy.get('ul[class="todo-list"] > li').should('have.length', 1)
        .and("have.text", "\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tEstudar Jquery\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t");
    });
    it('Remover um item na lista', () => {
        cy.createToDo();
        cy.get('.destroy').invoke('show').click();
        cy.get('ul[class="todo-list"] > li').should('have.length', 0);
    });
    it('Editar um item na lista', () => {
        cy.createToDo();
        cy.get('ul[class="todo-list"] > li').dblclick();
        cy.get('input[class="edit"]').clear().type("Estudar Cypress").type("{enter}");
        cy.get('ul[class="todo-list"] > li').should('have.length', 1)
        .and("have.text", "\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tEstudar Cypress\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t");
    });
    it('Seleciona um item para feito', () => {
        cy.createToDo();
        cy.get('.toggle').click();
        cy.get('ul[class="todo-list"] > li[class="completed"]').should('have.length', 1);
    });
});