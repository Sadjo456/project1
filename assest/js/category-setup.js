"use strict";
export const fakeStoreUrl = {
    url: "https://fakestoreapi.com/",
    get products() {
        return fetch(this.url + "products").then((response) => response.json());
    },
    category(category_name) {
        console.log(this.url + "products/category/" + category_name);
        return fetch(this.url + "products/category/" + category_name).then((response) => response.json());
    },
};
// const categories = document.querySelectorAll("category-wrapper category category--name");
const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
const productContainer = document.querySelector(".product-container");
export const addProduct = ({ id, title, category, description, price, rating, image }) => {
    price = parseInt(price);
    const stars = (() => {
        const starCount = parseInt(rating.rate);
        const Float = +rating.rate.toString().split(".")[1];
        console.log(Float);
        if (Float >= 3 && Float <= 6) return { count: starCount, star: " half" };
        if (Float > 6) return { count: starCount + 1, star: " full" };
        return { count: starCount - 1, star: " full" };
    })();
    const ratingStar = (index) => {
        console.log(index, index == stars.count, stars.count);
        if (index == stars.count) return stars.star;
        return "";
    };
    const HTML = `
                    <div class="product">
                    <div class="top-half">
                        <div class="overlay">
                            <div class="rating stars-container">
                                <span class="stars${ratingStar(5)}">★</span>
                                <span class="stars${ratingStar(4)}">★</span>
                                <span class="stars${ratingStar(3)}">★</span>
                                <span class="stars${ratingStar(2)}">★</span>
                                <span class="stars${ratingStar(1)}">★</span>
                            </div>
                            <div class="description">${description}</div>
                            <button class="quick-buy">quick buy</button>
                        </div>
                        <img
                            src="${image}"
                            alt=""
                            class="product--image"
                        />
                    </div>
                    <div class="bottom-half">
                        <div class="product--name">${name}</div>
                        <div class="price-wrapper">
                            <span class="price previous-price">${(price * 1.15).toFixed(0) + 0.99}</span>
                            <span class="price now-price">${price + 0.99}</span>
                        </div>
                    </div>
                </div>
                    `;
    productContainer.insertAdjacentHTML("beforeend", HTML);
};
// console.log("here");
// productContainer.innerHTML = "";
// fakeStoreUrl.products.then((data) => data.forEach(addProduct));
// productContainer.innerHTML = "";
// fakeStoreUrl.category("electronics").then((data) => data.forEach(addProduct));
// fakeStoreUrl.category("electronics").then((data) => console.log(data));
