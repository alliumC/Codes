    const sign = document.querySelector('.sign');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 2) {
        sign.classList.add('inverted');
      } else {
        sign.classList.remove('inverted');
      }
    });