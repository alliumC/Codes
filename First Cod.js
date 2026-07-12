window.addEventListener('scroll', () => {
    const sign = document.querySelector('.sign');
    const box = document.querySelector('.white').getBoundingClientRect();
    const signR = sign.getBoundingClientRect();

    if (signR.bottom * 1.5 > box.top) {
        sign.classList.add('inverted');
    } else {
        sign.classList.remove('inverted');
    }
});
