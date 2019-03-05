import $ from 'jquery';


$(document).ready(() => {
  // Delay link redirect
  // Uncomment for prod
  const delayRedirect = (url) => {
    setTimeout(() => window.location = url, 2000);
  };

  const desktop = window.matchMedia('(min-width: 48em)');

  $('#linkPortfolio').click((e) => {
    e.preventDefault();

    if (desktop.matches) {
      e.currentTarget.href = delayRedirect(e.currentTarget.href);
  
      const block = document.querySelector('.hero-animation');
      const blockLines = document.querySelectorAll('.hero-animation_item');
  
      block.style.display = 'flex';
  
      const DELAY = 150;
  
      // Add animation for block elems
      // Each next elems has animation delay = elem[index] * DELAY
      for (let i = 0; i < blockLines.length; i++) {
        blockLines[i].classList.add('hero-animation_item--animated');
  
        if (i) {
          blockLines[i].style.animationDelay = `${DELAY * i}ms`;
        }
      }
    }
  });

  $('.item-content_wrap-link').click((e) => {
    e.preventDefault();

    // Uncomment for prod
    e.currentTarget.href = delayRedirect(e.currentTarget.href);

    if (desktop.matches) {
      const block = document.querySelector('.hero-animation');
      const blockLines = document.querySelectorAll('.hero-animation_item');

      block.style.display = 'flex';

      const DELAY = 150;

      // Add animation for block elems
      // Each next elems has animation delay = elem[index] * DELAY
      for (let i = 0; i < blockLines.length; i++) {
        blockLines[i].classList.add('hero-animation_item--animated');

        if (i) {
          blockLines[i].style.animationDelay = `${DELAY * i}ms`;
        }
      }

      // Remove for prod
      // setTimeout(() => $('.hero-animation_item').removeClass('hero-animation_item--animated') && $('.hero-animation').css('display', 'none'), 3000);
    } else {
      $('.item-content_circle-bg').addClass('circle-animation');
      $('.hero_control').addClass('opacity-animation');

      // Remove for prod
      // setTimeout(() => $('.item-content_circle-bg').removeClass('circle-animation') && $('.hero_control').removeClass('opacity-animation'), 3000);
    }
  });
});
