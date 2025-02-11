describe('рабочее пространство', () => {
    it('работодатель может написать в рабочем пространвстве', () => {
        cy.visit('https://dev.profteam.su/login'); // ссылка на авторизацию
        cy.get('input[autocomplete="username"]').type('testerEmployer');
        cy.get('input[autocomplete="current-password"]').type('Password1');
        cy.contains('Войти').click();

        cy.url().should('include', '/account');

        cy.contains('p.menu-item__item-name', 'Отклики').click();
        cy.contains('Рабочее пространство').eq(0).click();
        cy.get('textarea[placeholder="Напишите комментарий..."]').eq(0).type('здраствуй', {force:true});
        cy.get('svg[viewBox="0 0 24 24"]').last().click({force:true});

    });
});
