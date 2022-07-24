//https://fakestoreapi.com/docs
var fakeStoreUrl = "https://fakestoreapi.com/products";
var productEl = document.querySelector("#prod-elem");
var categories = document.querySelectorAll(".category");

function testing() {
  categories.forEach((category) => {
    var catAttri = category.getAttribute("data-id");

    category.addEventListener("click", (event) => {
      event.preventDefault();
      var categoryUrl =
        "https://fakestoreapi.com/products/category/" + catAttri;
      //getProduct(categoryUrl);
      console.log(categoryUrl);
    });
  });
}

function getProduct() {
  productEl.innerHTML = "";
  fetch(fakeStoreUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
}

getProduct();
