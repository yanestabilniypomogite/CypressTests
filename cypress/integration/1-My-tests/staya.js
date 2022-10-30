
var endings = ["mail.ru", "list.ru", "rambler.ru", "yandex.ru", "gmail.com"];
var symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
var codes = ["8911", "8921" , "8900" , "8992" ,"8904", "8924" ]
var numbers = "1234567890";
var url = 'https://staya.dog/';

function rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
}

function getRandomStr(len) {
    var ret = "";
    for (var i = 0; i < len; i++)
        ret += symbols[rand(0, symbols.length - 1)];
    return ret;
}

function getEmail() {
    var a = getRandomStr(rand(3, 5));
    var   b = getRandomStr(rand(3, 5));
    return a + "." + b + "@" + endings[rand(0, endings.length - 1)];
}

function getRandomNumber(len) {
    var getNumber = "";
    for (var i = 0; i < len; i++)
        getNumber += numbers[rand(0, numbers.length - 1)];
    return getNumber;
}

function randomNumber() {
    var number = getRandomNumber(rand(7, 7));
    return  codes[rand(0, codes.length -1)] + number;
}


describe('Тестирование staya', function () {

    it('Проваливаюсь в категорию поводки и ищу совпадение с названием Heatwave', function () {
        cy.visit(url);
        cy.get('[href="/catalog/leashes"] > .category-link__title').click();
        cy.contains('Iced Blue');
        cy.end();
         })

    it('Проверка регистрации', function () {
        cy.visit(url);
        cy.get('.header-bottom__right--link').click();
        cy.get('[name="first_name"]').type('Ivan');
        cy.get('[name="last_name"]').type('Ivanov');
        cy.get('.registration__form > form > [type="email"]').type(`${getEmail()}`);
        cy.get(':nth-child(6) > div > .field').type(`${randomNumber()}`);
        cy.get('.password-field > .field').type('Qwerty1234');
        cy.get('[name="repeat-password"]').type('Qwerty1234');
        cy.get(':nth-child(2) > .nice-checkbox > .ni_checkbox-input-fake').click();
        cy.get('.registration__form--btn').click();
        cy.contains('регистрация прошла успешно!');
        })
    
    it('Проверка авторизации', function () {
        cy.visit(url);
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type(`${getEmail()}`);
        cy.get('.auth-form > form > [type="password"]').type('Qwerty1234');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})

