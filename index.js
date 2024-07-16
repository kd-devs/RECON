// welcome address
document.addEventListener('DOMContentLoaded', function() {
  const slideInSection = document.getElementById('slideInSection');

  function checkSlide() {
    const slideInAt = (window.scrollY + window.innerHeight) - slideInSection.clientHeight / 2;
    const sectionTop = slideInSection.offsetTop;

    if (slideInAt > sectionTop) {
      slideInSection.classList.add('slide-in');
    }
  }

  window.addEventListener('scroll', checkSlide);
});

// event-section
document.addEventListener('DOMContentLoaded', function() {
  const popUpSection = document.getElementById('popUpSection');

  function checkPopUp() {
    const popUpAt = (window.scrollY + window.innerHeight) - popUpSection.clientHeight / 2;
    const sectionTop = popUpSection.offsetTop;

    if (popUpAt > sectionTop) {
      popUpSection.classList.add('pop-up');
    }
  }

  window.addEventListener('scroll', checkPopUp);
});

// throw-back-section
document.addEventListener('DOMContentLoaded', function() {
  const popUpSection = document.getElementById('popUpSection-2');

  function checkPopUp() {
    const popUpAt = (window.scrollY + window.innerHeight) - popUpSection.clientHeight / 2;
    const sectionTop = popUpSection.offsetTop;

    if (popUpAt > sectionTop) {
      popUpSection.classList.add('pop-up');
    }
  }

  window.addEventListener('scroll', checkPopUp);
});


// About-Page
// meet-the-team-images
document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('hoverImage');

  image.addEventListener('mouseenter', function() {
    image.style.transform = 'scale(1.2)';
    image.style.opacity = '0.8';
  });

  image.addEventListener('mouseleave', function() {
    image.style.transform = 'scale(1)';
    image.style.opacity = '1';
  });
});
