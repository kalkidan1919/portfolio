/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
window.addEventListener("DOMContentLoaded", () => {
  const typedTextElement = document.getElementById("typed-text");

  const phrases = [
    "a passionate Software Engineering Student 💡",
    "Aspiring Full-Stack Developer 👩‍💻",
    "Excited about Web Development & Tech Leadership 🚀",
  ];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  const typingSpeed = 60;
  const deletingSpeed = 30;
  const pauseBeforeDelete = 1500;
  const pauseBeforeType = 500;

  function typeEffect() {
    const currentPhrase = phrases[currentPhraseIndex];
    let displayText = currentPhrase.substring(0, currentCharIndex);

    typedTextElement.textContent = displayText;

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      currentCharIndex++;
      setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(typeEffect, deletingSpeed);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, pauseBeforeDelete);
      } else {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, pauseBeforeType);
      }
    }
  }

  setTimeout(typeEffect, 1000); // Delay start for smooth entrance
});
  