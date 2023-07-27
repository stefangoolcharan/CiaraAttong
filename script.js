let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-items');

menu.onclick = () => { 
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const fadeInDiv = document.querySelector('.fade-in');
const fadeInDiv2 = document.querySelector('.see-more')

const fadeInOptions = {
  threshold: 0.3 
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInOptions);

fadeInObserver.observe(fadeInDiv);

const fadeInObserver2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, fadeInOptions);
  
  fadeInObserver.observe(fadeInDiv2);