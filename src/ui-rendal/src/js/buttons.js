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


const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon');

const sidebar = document.querySelector('.dws-menu');

sidebarToggleBtn.onclick = function () {

    sidebar.classList.toggle('dws-menu-active')
}

Vue.component('product', {
    template: `
        <div class="product-description">
            <div class="product-description-image">
                <div class="product-description-image_btn">
                    <button class="product-description-image_btn__comfort" value="comfort">{{ btnComfort }}</button>
                    <button class="product-description-image_btn__credit" value="installment">{{ btnCredit }}</button>
                </div>
                <div class="product-description-image__photo">
                    <img class="product-description-image_ph" v-bind:src="image" v-bind:alt="altText">
                </div>
            </div>
            <div class="product-description-information">
                <div class="product-description-information__title">
                    <h4>{{ title }}</h4>
                </div>
                <div class="product-description-information__terms">
                    {{ terms }}
                </div>
                <div class="product-description-information__underground">
                    <img v-bind:src="icon" v-bind:alt="altIcon">
                    <a class="product-link1" :href="linkSubway" target="_blank">{{ subway }}</a>
                </div>
                <div class="product-description-information__address">
                    <a class="product-link2"  :href='linkAddress' target="_blank">{{ address }}</a>
                </div>
            </div>
        </div>     
        `,
    data() {
        return {
            btnComfort: 'Comfort',
            btnCredit: 'Installment 12 mo.',
            image: "./assets/image.jpg",
            altText: 'RС "Ilyinsky meadows"',
            title: 'RС "Ilyinsky meadows"',
            terms: 'The deadline for apt. is April 4, 2020',
            icon: './assets/underground.svg',
            altIcon: 'subway',
            subway: 'Oktyabrskaya',
            linkSubway: "https://goo.gl/maps/XirfNAPeATfc7KRk8",
            address: 'Lev Tolstoy Ave. 180A',
            linkAddress: 'https://goo.gl/maps/vZ6SWJ5a5gR775x5A'
        }
    }
})

new Vue({
    el: '.all-products'
})
new Vue ({
    el: '#hidden'
})

