const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', function(){
    navList.classList.toggle('nav-list--visible');
    navToggle.classList.toggle('nav-toggle--active');
})