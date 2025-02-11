describe('просмотр стажировок', () => {
    it('', () => {
        cy.visit('https://dev.profteam.su/internships');
        file = "' OR '1'='1";
        cy.get('input[placeholder="Название..."]').type(file);
        
        cy.get('input[value="Да"]').click({ force: true });

        cy.get('.internship-item').should('exist');

        cy.get('button[data-v-db1dcd8a]').eq(2).click();

    });
});