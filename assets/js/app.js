const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$('.link-item');

items.forEach((linkItem, index) => {
    linkItem.onclick = function () {
        $('.link-item.active').classList.remove('active')
        this.classList.add('active')
        navList.classList.remove('active');
    }
})


const header = $('.header');

window.addEventListener("scroll", function () {

    window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");

});

// Go to top

const goTop = $('.go-top');

window.addEventListener("scroll", function () {
    this.window.scrollY >= 800 ? goTop.classList.add('active') : goTop.classList.remove('active');
})


// bars

const bars = $('.nav-bars');
const navList = $('.nav-list');
const closeBtn = $('.close-btn');
bars.onclick = function () {
    navList.classList.add("active");
}

closeBtn.onclick = function () {
    navList.classList.remove('active');
}