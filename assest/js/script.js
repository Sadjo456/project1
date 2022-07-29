//https://fakestoreapi.com/docs
var fakeStoreUrl = "https://fakestoreapi.com/products";
var productEl = document.querySelector("#prod-elem");
var categories = document.querySelectorAll(".category");
var productCardEl = document.querySelector("#product-card");

categories.forEach((category) => {
  var catAttri = category.getAttribute("data-id");

  category.addEventListener("click", (event) => {
    event.preventDefault();
    var categoryUrl = "https://fakestoreapi.com/products/category/" + catAttri;
    getProduct(categoryUrl);
    console.log(categoryUrl);
  });
});

// categories - men's clothing, jewelery, electronics, women's clothing

function getProduct(fakeStoreUrl) {
  productEl.innerHTML = "";
  fetch(fakeStoreUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);

      //get product title, price, and image
      data.forEach((product) => {
        var productImage = product.image;
        var productName = product.title;
        var productPrice = product.price;

        // create element
        var cardSection = document.createElement("div");
        var cardImage = document.createElement("img");
        var cardName = document.createElement("h5");
        var cardPrice = document.createElement("h5");
        var cardCart = document.createElement("button");

        //append card to container
        cardSection.setAttribute("class", "card column is-3");
        productEl.append(cardSection);

        cardImage.setAttribute("src", productImage);
        cardImage.setAttribute("class", "card-image image is-128x128 column");
        cardSection.append(cardImage);

        cardName.setAttribute("class", "card-content column");
        cardSection.append(cardName);

        cardPrice.setAttribute("class", "card-content column");
        cardSection.append(cardPrice);

        cardCart.setAttribute("class", "card-content column");
        cardSection.append(cardCart);

        cardImage.innerHTML = productImage;
        cardName.innerHTML = productName;
        cardPrice.innerHTML = "$" + productPrice;
        cardCart.innerHTML = "Add to Cart";

        cardCart.addEventListener("click",()=>{
          addToCart({
            price:productPrice,
            name:productName,
            image:productImage
          })
        } )

      });
    });
  });
}

function addToCart(data){
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")
  cart.push(data)
  localStorage.setItem("cart",JSON.stringify(cart))
}


getProduct(fakeStoreUrl);
