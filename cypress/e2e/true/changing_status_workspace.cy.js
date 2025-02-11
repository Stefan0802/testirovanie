describe('рабочее пространство', () => {
    it('работодатель может написать в рабочем пространвстве', () => {
        cy.visit('https://dev.profteam.su/login'); // ссылка на авторизацию
        cy.get('input[autocomplete="username"]').type('testerEmployer');
        cy.get('input[autocomplete="current-password"]').type('Password1');
        cy.contains('Войти').click();

        cy.url().should('include', '/account');

        cy.contains('p.menu-item__item-name', 'Отклики').click();
        cy.get('button.button.responses-list-item__button-move').eq(2).click();
        cy.contains('Принят на вакансию').click();
    });
});
