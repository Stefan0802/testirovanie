describe('отклик на стажировку', () => {
    it('студент может зайти и откликнутся на стажировку', () => {
        cy.visit('https://dev.profteam.su/login'); // ссылка на авторизацию
        cy.get('input[autocomplete="username"]').type('testerEmployer');
        cy.get('input[autocomplete="current-password"]').type('Password1');
        cy.contains('Войти').click();


        cy.visit('https://dev.profteam.su/internships');
        cy.contains('Подробнее').eq(0).click();


        cy.contains('Откилкнутся').click({ force: true });


    });
});
