//start mobile menu
document.querySelector('.menu-btn').addEventListener('click', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
//end mobile menu

//start stycky header 
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
//end sticky header

// Получаем все ссылки внутри .menu
const menuLinks = document.querySelectorAll('.menu a');

// Получаем элементы .menu и .menu__btn
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

// Вешаем обработчик события на каждую ссылку
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Удаляем класс active у .menu и .menu__btn
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});
