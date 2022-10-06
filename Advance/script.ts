// Restaurant exercise

var offers: string[] = ["Starter", "Main dish", "Dessert", "Drinks"];
var color_offers: string[] = ["white", "#1E090B", "#F49426", "#E1C5BA"];

var offer_list = document.getElementsByClassName("offers__container__list")[0];

for (let val of offers) {
    offer_list.innerHTML += `<li class="offers__container__list__item">` + val + `</li>`
}

var color_offer_list = document.getElementsByClassName("offers__container__list__item");

for (let i = 0; i < color_offers.length; i++) {
    color_offer_list[i].style.color = color_offers[i];
}

//creating objects for inner HTML
const Starter = [{
    title: 'Soups',
    description: 'All soups are served with bread.',
    image: "https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375__340.jpg"
}, {
    title: 'Snacks',
    description: 'Always room for the stomach.',
    image: "https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455__340.jpg"
}];

var titles: string[] = ["Our Starters", "Our Main Dishes", "Must have: Dessert!", "And don't forget to drink ;)"];

var content = document.getElementsByClassName("container")[0];
var menu_id: string[] = ["starter", "main", "dessert", "drinks"]

// I don't understand why the <p> style is bold, but that could be fixed with CSS I hope
for (let i = 0; i < Starter.length; i++) {
     if (i % 2 === 0){
        document.getElementById("starter").innerHTML+=
        `<div class="d-flex align-items-center justify-content-center">
        <p class="pe-5">`+Starter[i].description+`</p>
        <img class="ps-5" src="`+ Starter[i].image + `" alt="">
    </div>`;
     } else {
    document.getElementById("starter").innerHTML +=
        ` <div class="d-flex align-items-center justify-content-center">
            <img class="pe-5" src="`+ Starter[i].image + `" alt="">
            <p class="ps-5">`+ Starter[i].description + `</p>
        </div>`
     }
}

