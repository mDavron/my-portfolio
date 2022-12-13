// social icons show
const socialIcons = document.querySelector('.social_icons');

function showIcons() {
  if (socialIcons.classList.contains('show-icon')) {
    socialIcons.classList.remove('show-icon')
  } else {
    socialIcons.classList.add('show-icon')
  }
};
window.onload = function () {
  setTimeout(function () {
    // alert("Hello");
    showIcons();
  }, 3000);
};

//   change navbar bg in scroll scripts here

const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-tr-dark')
  } else {
    nav.classList.remove('bg-tr-dark')
  }
});

// navbar collapse delete show class
const navbarCollapse = document.querySelector('.navbar-collapse ');
const navItem = document.querySelectorAll('.nav-item');

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show')
    }
  })
}

// typed text scripts here
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Freelancer";
  }, 0);

  setTimeout(() => {
    text.textContent = " Frontend Developer";
  }, 4000);

  setTimeout(() => {
    text.textContent = " ReactJS Developer";
  }, 8000);
}
textLoad();

setInterval(textLoad, 12000);

// scroll top element scripts here
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active')
  }

})
