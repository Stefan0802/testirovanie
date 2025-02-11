describe('создание стажировки работодателем', () => {
  it('Работодатель может войти в систему и создать стажировку', () => {
    cy.visit('https://dev.profteam.su/login'); // ссылка на авторизацию
    cy.get('input[autocomplete="username"]').type('testerEmployer');
    cy.get('input[autocomplete="current-password"]').type('Password1');
    cy.contains('Войти').click();

    
    cy.url().should('include', '/account');
    

    cy.visit('https://dev.profteam.su/account/internships');
    cy.contains('Создать стажировку').click();

    
    cy.get('input[placeholder="Кладовщик"]').first().type('таксист(тест)', { force: true });

    
    cy.get('input[type="date"]').eq(0).type('2025-02-11'); // Дата начала
    cy.get('input[type="date"]').eq(1).type('2025-02-12'); // Дата окончания

    
    cy.get('textarea[placeholder="Ваши требования"]').first().type('тест по созданию стажировки', { force: true });
    cy.get('textarea[placeholder="Обязанности сотрудника"]').first().type('тест обязанностей сотрудника', { force: true });

    // Отправка формы
    cy.contains('Создать стажировку').click({ force: true });

    
});
});
