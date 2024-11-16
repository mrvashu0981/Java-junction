'use strict';



// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/*sub nav*/
  const dropdown = document.querySelector('.menu-dropdown');
  const items = dropdown.querySelectorAll('.item');

  dropdown.addEventListener('mouseenter', () => {
    let delay = 0;
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
      }, delay);
      delay += 200; // Delay each item by 200ms
    });
  });

  dropdown.addEventListener('mouseleave', () => {
    items.forEach((item) => {
      item.classList.remove('active');
    });
  });

//   const dropdown = document.querySelector('.menu-dropdown');
// const items = dropdown.querySelectorAll('.item');

// // Add a "3D falling" effect when the mouse enters the dropdown
// dropdown.addEventListener('mouseenter', () => {
//   items.forEach((item, index) => {
//     setTimeout(() => {
//       item.classList.add('active');
//       // Randomize the "falling" time slightly for more natural effect
//       item.style.transitionDelay = `${Math.random() * 0.3}s`;
//     }, index * 150); // Stagger the items falling down, with 150ms delay between each
//   });
// });

// // Reset the effect when the mouse leaves the dropdown
// dropdown.addEventListener('mouseleave', () => {
//   items.forEach((item) => {
//     item.classList.remove('active');
//     // Reset transition delay for re-entering
//     item.style.transitionDelay = '0s';
//     // Set the items back to the starting 3D position after the transition
//     setTimeout(() => {
//       item.style.transform = 'translateY(-150px) rotateX(90deg) translateZ(-200px)';
//     }, 400); // Delay before resetting to make it smooth
//   });
// });









// navbar functionality

const [navbar, navToggler, navbarLinks] = [
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]")
];

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
  document.body.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);



// header active

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElemOnScroll);



// scroll reveal effect

const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = function () {
  for (let i = 0; i < revealElements.length; i++) {

    // add revealed class on element, when visible in window
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
      revealElements[i].classList.add("revealed");

      // remove long transition from button, after 1 second
      if (revealElements[i].classList.contains("btn")) {
        setTimeout(function () {
          revealElements[i].style.transition = "0.25s ease";
        }, 1000);
      }
    }

  }
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();








// cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to the cart!`);
}
