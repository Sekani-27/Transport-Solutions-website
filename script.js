let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}






const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.classList.toggle('show');
});

// Responsive navigation using else if
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;

  if (windowWidth > 991) {
    nav.classList.remove('show');
    menuToggle.classList.remove('show');
    menuToggle.querySelector('.fa-bars').style.display = 'block';
    menuToggle.querySelector('.fa-times').style.display = 'none';
  } else if (windowWidth <= 991) {
    nav.classList.add('show');
    menuToggle.classList.add('show');
    menuToggle.querySelector('.fa-bars').style.display = 'none';
    menuToggle.querySelector('.fa-times').style.display = 'block';
  }
});