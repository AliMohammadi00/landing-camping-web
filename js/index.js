const menuBtn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('.menu-mobile')
let likes = document.querySelectorAll(".like__img")


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn--open')
    mobileMenu.classList.toggle('mobile-menu--open')
})

likes.forEach(like => {
    like.addEventListener('click', e => {
        e.target.classList.toggle('like__img--liked')
    })
});