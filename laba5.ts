// Функция, которая выводит текущее время в консоль через 10 секунд после загрузки страницы
function getCurrentDate(): void {
    console.log(Date.now());
}

// Функция, которая будет вызвана после полной загрузки страницы
window.addEventListener('load', function() {
    setTimeout(getCurrentDate, 10000); // Вызываем getCurrentDate через 10 секунд
});

// Функция, которая возвращает другую функцию, использующую замыкания
function createLogger(message: string): () => void {
    return function() {
        console.log(message);
    };
}

// Пример использования функции createLogger
const logHello = createLogger("Hello, world!");
logHello(); // Выводит "Hello, world!" в консоль
