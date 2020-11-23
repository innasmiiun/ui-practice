
const anyBtn = document.querySelector('.any-distance-btn input');
const smallBtnsArray = document.querySelectorAll('.custom-distance-btns-container .subway-distance__button input');
anyBtn.addEventListener('change', () => {
    smallBtnsArray.forEach((item) => {
        item.checked = false;
    })
})
smallBtnsArray.forEach((item) => {
    item.addEventListener('change', () => {
        anyBtn.checked = false;
    })
})

const showMoreBtn = document.querySelector('.additional-page__btn');
const hiddenProducts = document.querySelector('.all-products.hidden');
showMoreBtn.addEventListener('click', () => {
    hiddenProducts.classList.remove("hidden");
    showMoreBtn.classList.add("hidden");
})

const showMoreOptions = document.querySelector('.show-more-link');
const hiddenCheck = document.querySelectorAll('.checkbox-hidden');

showMoreOptions.onclick = function () {

    if (showMoreOptions.dataset.options == "hidden") {
        hiddenCheck.forEach (function (item){
            item.style.display = "block"
        });
        showMoreOptions.innerHTML = "Show less";
        showMoreOptions.dataset.options == "visible"
    }
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheck.forEach (function (item){
            item.style.display = "none"
        });
        showMoreOptions.innerHTML = "Show more";
        showMoreOptions.dataset.options == "hidden";
    }


}

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon');

const sidebar = document.querySelector('.dws-menu');

sidebarToggleBtn.onclick = function () {

    sidebar.classList.toggle('dws-menu-active')
}

