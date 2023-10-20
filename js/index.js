// document.addEventListener("DOMContentLoaded", function () {
//     const car1 = document.getElementById('car1');
//     const car2 = document.getElementById('car2');
//     let isForward = true;

//     function animateCar(car) {
//         const containerWidth = document.querySelector('.animation_container').offsetWidth;
//         const carWidth = car.offsetWidth;
//         const startPoint = isForward ? -carWidth : containerWidth;
//         const endPoint = isForward ? containerWidth : -carWidth;

//         car.style.transform = `translateX(${startPoint}px)`;

//         setTimeout(() => {
//             // car.style.opacity = '1';
//             car.style.transform = `translateX(${endPoint}px)`;
//             car.style.opacity = '0';

//             setTimeout(() => {
//                 // car.style.opacity = '0';
//                 isForward = !isForward;
//                 // car.src = isForward ? 'car1.png' : 'car2.png';
//                 car.src = isForward ? './img/car1.png' : './img/car2.png';
//                 car.style.opacity = '1'; // После смены изображения делаем его сразу видимым
//                 animateCar(car);
//             }, 1000); // Задержка перед сменой направления
//         }, 3000); // Задержка перед изменением скорости
//     }

//     animateCar(car1);
//     animateCar(car2);

//     function showAlert() {
//         alert("Файл JS успешно подключен и обработчик события работает!");
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const car1 = document.getElementById('car1');
//     const car2 = document.getElementById('car2');
//     let isCar1Visible = true;

//     function animateCar(car) {
//         const containerWidth = document.querySelector('.animation_container').offsetWidth;
//         const carWidth = car.offsetWidth;
//         const startPoint = isCar1Visible ? -carWidth : containerWidth;
//         const endPoint = isCar1Visible ? containerWidth : -carWidth;

//         car.style.transform = `translateX(${startPoint}px)`;

//         setTimeout(() => {
//             car.style.transform = `translateX(${endPoint}px)`;
//             car.style.opacity = '0';

//             setTimeout(() => {
//                 car.style.opacity = '1';
//                 isCar1Visible = !isCar1Visible;
//                 car.src = isCar1Visible ? './img/car1.png' : './img/car2.png';
//                 animateCar(car);
//             }, 1000); // Задержка перед сменой направления
//         }, 3000); // Задержка перед изменением скорости
//     }

//     animateCar(isCar1Visible ? car1 : car2); // Начать анимацию с видимой машины

//     function showAlert() {
//         alert("Файл JS успешно подключен и обработчик события работает!");
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const car1 = document.getElementById('car1');
//     const car2 = document.getElementById('car2');
//     let isCar1Visible = true;

//     function animateCar(car) {
//         const containerWidth = document.querySelector('.animation_container').offsetWidth;
//         const carWidth = car.offsetWidth;
//         const startPoint = isCar1Visible ? -carWidth : containerWidth;
//         const endPoint = isCar1Visible ? containerWidth : -carWidth;

//         car.style.transform = `translateX(${startPoint}px)`;

//         setTimeout(() => {
//             car.style.transform = `translateX(${endPoint}px)`;

//             setTimeout(() => {
//                 car.style.opacity = '0';

//                 setTimeout(() => {
//                     car.style.opacity = '1';
//                     isCar1Visible = !isCar1Visible;
//                     car.src = isCar1Visible ? './img/car1.png' : './img/car2.png';
//                     animateCar(car);
//                 }, 10); // Маленькая задержка перед сменой картинки
//             }, 1000); // Задержка перед невидимостью
//         }, 3000); // Задержка перед изменением скорости
//     }

//     animateCar(isCar1Visible ? car1 : car2); // Начать анимацию с видимой машины

//     function showAlert() {
//         alert("Файл JS успешно подключен и обработчик события работает!");
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Когда содержимое DOM загружено, начинаем выполнение кода

//     const car1 = document.getElementById('car1');
//     const car2 = document.getElementById('car2');
//     let isCar1Visible = true; // Переменная для определения, какая машина видима

//     function animateCar(car) {
//         // Функция для анимации движения машины

//         const containerWidth = document.querySelector('.animation_container').offsetWidth;
//         const carWidth = car.offsetWidth;
//         const startPoint = isCar1Visible ? -carWidth : containerWidth;
//         const endPoint = isCar1Visible ? containerWidth : -carWidth;

//         // Настройка начальных параметров и точек движения

//         car.style.transform = `translateX(${startPoint}px)`;

//         // Перемещаем машину в начальную позицию

//         setTimeout(() => {
//             // Запускаем анимацию после задержки

//             car.style.transform = `translateX(${endPoint}px)`;

//             // Перемещаем машину в конечную позицию

//             setTimeout(() => {
//                 car.style.opacity = '0';

//                 // Делаем машину невидимой

//                 setTimeout(() => {
//                     isCar1Visible = !isCar1Visible;
//                     car.src = isCar1Visible ? './img/car1.png' : './img/car2.png';
//                     car.style.opacity = '1';
//                     animateCar(car);
//                 }, 0); // Маленькая задержка перед сменой картинки
//             }, 0); // Задержка перед невидимостью
//         }, 4500); // Задержка перед изменением скорости
//     }

//     animateCar(isCar1Visible ? car1 : car2); // Начать анимацию с видимой машины

//     function showAlert() {
//         alert("Файл JS успешно подключен и обработчик события работает!");
//     }
// });

// Функция, которая выполняется после полной загрузки DOM и запускает анимацию движения машин.

// document.addEventListener("DOMContentLoaded", function () {
//     const car1 = document.getElementById('car1');
//     const car2 = document.getElementById('car2');
//     let isCar1Visible = true;

//     function animateCar(car) {
//         const containerWidth = document.querySelector('.animation_container').offsetWidth;
//         const containerHeight = document.querySelector('.animation_container').offsetHeight;
//         const carWidth = car.offsetWidth;
//         const carHeight = car.offsetHeight;
//         const startX = isCar1Visible ? -carWidth : containerWidth;
//         const startY = isCar1Visible ? containerHeight : -carHeight; // Начальное смещение выше экрана на 100 пикселей
//         const endX = isCar1Visible ? containerWidth : -carWidth;
//         const endY = isCar1Visible ? -carHeight : containerHeight; // Изменено
        
//         car.style.transform = `translate(${startX}px, ${startY}px)`;
        
//         setTimeout(() => {
//             car.style.transform = `translate(${endX}px, ${endY}px)`;
            
//             setTimeout(() => {
//                 car.style.opacity = '0';
                
//                 setTimeout(() => {
//                     isCar1Visible = !isCar1Visible;
//                     car.src = isCar1Visible ? './img/car1.png' : './img/car2.png';
//                     car.style.opacity = '1';
//                     animateCar(car);
//                 }, 0);
//             }, 0);
//         }, 4500);
//     }
    
//     animateCar(isCar1Visible ? car1 : car2);
    
//     function showAlert() {
//         alert("Файл JS успешно подключен и обработчик события работает!");
//     }
// });

// const startX = isCar1Visible ? -carWidth : 100; // Используем 100vw для начальной позиции по оси X
// const startY = isCar1Visible ? 100 : -carHeight; // Используем 100vh для начальной позиции по оси Y
// const endX = isCar1Visible ? 100 : -carWidth; // Используем 100vw для конечной позиции по оси X
// const endY = isCar1Visible ? -carHeight : 100; // Используем 100vh для конечной позиции по оси Y

document.addEventListener("DOMContentLoaded", function () {
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');
    let isCar1Visible = true;

    function animateCar(car) {
        const container = document.querySelector('.animation_container_car');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const carWidth = car.offsetWidth;
        const carHeight = car.offsetHeight;
        // const startX = isCar1Visible ? -carWidth : containerWidth - carWidth - carWidth; // Начальное смещение от края контейнера

        // const startX = isCar1Visible ? -carWidth : containerWidth - carWidth; // Начальное смещение от края контейнера
        // const startY = isCar1Visible ? containerHeight - carHeight : -carHeight; // Начальное смещение от края контейнера
        // const endX = isCar1Visible ? containerWidth - carWidth : -carWidth; // Конечное смещение от края контейнера
        // const endY = isCar1Visible ? -carHeight : containerHeight - carHeight; // Конечное смещение от края контейнера
        const startX = isCar1Visible ? -carWidth : containerWidth; // Начальное смещение от края контейнера
        const startY = isCar1Visible ? containerHeight : -carHeight; // Начальное смещение от края контейнера
        const endX = isCar1Visible ? containerWidth : -carWidth; // Конечное смещение от края контейнера
        const endY = isCar1Visible ? -carHeight : containerHeight; // Конечное смещение от края контейнера

        car.style.transform = `translate(${startX}px, ${startY}px)`;

        setTimeout(() => {
            car.style.transform = `translate(${endX}px, ${endY}px)`;

            setTimeout(() => {
                car.style.opacity = '0';

                setTimeout(() => {
                    isCar1Visible = !isCar1Visible;
                    car.src = isCar1Visible ? './img/car1.png' : './img/car2.png';
                    car.style.opacity = '1';
                    animateCar(car);
                }, 0);
            }, 0);
        }, 4500);
    }

    animateCar(isCar1Visible ? car1 : car2);

});
// function showAlert() {
//     alert("Файл JS успешно подключен и обработчик события работает!");
// }

//анимация облаков
const clouds = document.querySelectorAll('.cloud');

clouds.forEach(cloud => {
  const speed = parseFloat(cloud.getAttribute('data-speed'));
  const animationDuration = 1000 / speed; // Пропорциональная продолжительность анимации
  const restartDelay = animationDuration * 1.5; // Задержка перед перезапуском
  const startX = Math.random() * 100 + '%'; // Случайное начальное положение

  cloud.style.setProperty('--startX', startX); // Установка свойства CSS переменной
  cloud.style.animationDuration = `${animationDuration}s, ${restartDelay}s`;
});