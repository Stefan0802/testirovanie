describe('отклик на стажировку', () => {
    it('студент может зайти и откликнутся на стажировку', () => {
        cy.visit('https://dev.profteam.su/login'); // ссылка на авторизацию
        cy.get('input[autocomplete="username"]').type('testerEmployer');
        cy.get('input[autocomplete="current-password"]').type('Password1');
        cy.contains('Войти').click();

        cy.url().should('include', '/account');

        cy.visit('https://dev.profteam.su/account/responses');
        cy.contains('Все').eq(0).click();

        // Ожидаем, что элемент "Стажировки" станет видимым и кликаем на него
        cy.get('div.form-select__option').contains('Стажировки').should('be.visible').click();

        
        
        cy.get('svg[viewBox="0 0 18 18"]').eq(0).scrollIntoView().click();


    });
});
