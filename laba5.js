// Функция, которая выводит текущее время в консоль через 10 секунд после загрузки страницы
function getCurrentDate() {
    console.log(Date.now());
}
// Функция, которая будет вызвана после полной загрузки страницы
window.addEventListener('load', function () {
    setTimeout(getCurrentDate, 10000); // Вызываем getCurrentDate через 10 секунд
});
// Функция, которая возвращает другую функцию, использующую замыкания
function createLogger(message) {
    return function () {
        console.log(message);
    };
}
// Пример использования функции createLogger
var logHello = createLogger("Hello, world!");
logHello(); // Выводит "Hello, world!" в консоль
