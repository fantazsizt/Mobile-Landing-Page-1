window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener('scroll', function () {
    const ul = document.querySelector('ul');
    ul.classList.toggle("sticky", window.scrollY > 0);
});

