//CURRENCY API

var USD = "USD";
var EUR = "EUR";
var AUD = "AUD";
var quantity = "10.0";
//var cartTotal = 99.99

function getCartTotal() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  var cartTotal = 0;
  for (var cartItem of cart) {
    cartTotal = cartTotal + cartItem.price;
  }
  return cartTotal;
}

function exchangeCurrency(e) {
  const cartTotal = getCartTotal();
  console.log();
  var currencyFrom = USD;
  var currencyTo = e.target.textContent;
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://currency-exchange.p.rapidapi.com/exchange?to=" +
      currencyTo +
      "&from=" +
      currencyFrom,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9b48de9da5mshc94cb678200ea81p1df7a3jsna428ec7c2d22",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(JSON.parse(response));
    exchange_rate = JSON.parse(response);
    el = document.getElementById("total-cost");
    el.innerHTML =
      Math.round(cartTotal * exchange_rate * 100) / 100 + " " + currencyTo;
  });
}
const currencies = {
  async: true,
  crossDomain: true,
  url: "https://currency-exchange.p.rapidapi.com/listquotes",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9b48de9da5mshc94cb678200ea81p1df7a3jsna428ec7c2d22",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
};
$.ajax(currencies).done(function (response) {
  console.log(response);
  console.log(JSON.parse(response));
});
/*
//SETTING UP Shipping Options and record answer in console
*/
function logShipping(shipType) {
  console.log(shipType);
}

$(".payment").on("click", exchangeCurrency);

function displayImages() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  var container = $("#order-images");
  for (var cartItem of cart) {
  }
}
