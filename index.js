//Достаем элементы
const generate = document.querySelector('.generate');
const copy = document.querySelector('.copy');

//Создаем масив для генерирования цветов
const hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
'a', 'b', 'c', 'd', 'e', 'f'];

//Создаем переменные
let color1 = ''
let color2 = ''

//Вешаем событие клика на кнопку
generate.addEventListener('click', () => {
    generateRandom();
});

copy.addEventListener('click', () => {
    copyGradients();
});

function generateRandom() {
    // console.log(hexNumbers[Math.floor(Math.random() * hexNumbers.length)])
    color1 = '', color2 = ''
    for (let i = 0; i < 6; i++) {
        color1 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
        color2 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
    }
    document.body.style.background = `linear-gradient(45deg, #${color1}, #${color2})`
}

function copyGradients() {
    const gradient = `background: linear-gradient(45deg, #${color1}, #${color2});`
    navigator.clipboard.writeText(gradient);
}