document.addEventListener('DOMContentLoaded', () => {
  const pageMenu = document.querySelector('#pageMenu');
  const btnOpenPageMenu = document.querySelector('#showPageMenu');
  const iconPageMenu = document.querySelector('.icon-hamburger');

  btnOpenPageMenu.addEventListener('click', (e) => {
    iconPageMenu.classList.toggle('animate');

    if (iconPageMenu.classList.contains('animate')) {
      e.currentTarget.style.zIndex = 2000;
      pageMenu.style.transform = 'none';
      document.body.style.cssText = 'position: fixed; width: 100%; height: 100%; overflow: hidden;';
    } else {
      pageMenu.style.transform = null;
      document.body.style.cssText = null;
      setTimeout(() => { btnOpenPageMenu.style.zIndex = null; }, 300);
    }
  });
});
