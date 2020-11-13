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