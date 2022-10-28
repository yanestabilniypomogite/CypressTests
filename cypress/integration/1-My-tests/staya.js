
describe('Тестирование staya', function () {
    
    it('Проваливаюсь в категорию поводки и ищу совпадение с названием Heatwave', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/catalog/leashes"] > .category-link__title').click();
        cy.contains('Iced Blue');
        cy.end();
         })

    it('Проверка регистрации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('[name="first_name"]').type('Vlad');
        cy.get('[name="last_name"]').type('Borisov');
        cy.get('.registration__form > form > [type="email"]').type('vadd@mail.ru');
        cy.get(':nth-child(6) > div > .field').type('89242063371');
        cy.get('.password-field > .field').type('Qwerty1234');
        cy.get('[name="repeat-password"]').type('Qwerty1234');
        cy.get(':nth-child(2) > .nice-checkbox > .ni_checkbox-input-fake').click();
        cy.get('.registration__form--btn').click();
        cy.contains('регистрация прошла успешно!');
        })
    
    it('Проверка авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vadd@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Qwerty1234');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})

