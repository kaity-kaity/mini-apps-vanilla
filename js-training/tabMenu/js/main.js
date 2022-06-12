'use strict'

{
  const menuItems = document.querySelectorAll('.menu li a')
  const contents = document.querySelectorAll('.content')

  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active')
      })

      document.getElementById(item.dataset.id).classList.add('active')
    });
  });
};