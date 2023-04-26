// Функция открытия и закрытия меню, которую мы добавляем на все страницы с хэдером
const menuOpener = () => {
  const burgerHeader = document.getElementById('burger-menu-icon');
  const menuHeader = document.getElementById('header-menu');
  const closeBtn = document.getElementById('menu-close-icon');
  const menuLink = document.querySelectorAll('.menu-nav__link');
  burgerHeader.addEventListener('click', function () {
    menuHeader.classList.add('is-active');
  });
  closeBtn.addEventListener('click', function () {
    menuHeader.classList.remove('is-active');
  });
  menuLink.forEach(link => link.addEventListener('click', function () {
    menuHeader.classList.remove('is-active');
  }))
}

export default menuOpener;