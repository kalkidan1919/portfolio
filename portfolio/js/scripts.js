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
const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alertBox.className = "alert alert-success text-center";
      alertBox.innerText = "✅ Message sent successfully!";
      alertBox.classList.remove("d-none");
      form.reset();
    } else {
      alertBox.className = "alert alert-danger text-center";
      alertBox.innerText = "❌ Oops! Something went wrong. Please try again.";
      alertBox.classList.remove("d-none");
    }
  } catch (error) {
    alertBox.className = "alert alert-danger text-center";
    alertBox.innerText = "❌ Network error. Please check your connection.";
    alertBox.classList.remove("d-none");
  } finally {
    submitButton.disabled = false;
  }
});