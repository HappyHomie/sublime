document.addEventListener("DOMContentLoaded", function() {

  // Describing products to product container (grid)
  let products = [
    {
      img: "pictures/product_1.jpg",
      desc: "Smart Phone",
      price: 670,
      tag: "product__new"
    },
    {
      img: "pictures/product_2.jpg",
      desc: "Smart Phone",
      price: 520,
      tag: "product__sale"
    },
    {
      img: "pictures/product_3.jpg",
      desc: "Smart Phone",
      price: 710,
      tag: "none"
    },
    {
      img: "pictures/product_4.jpg",
      desc: "Smart Phone",
      price: 330,
      tag: "none"
    }
  ];
// Creating products & inject them to HTML
  renderProducts();
  function renderProducts() {
    document.querySelector(".product__container").innerHTML = "";
    products.forEach(Element => {
      document.querySelector(
        ".product__container"
      ).innerHTML += `<div class="product">
          <div class="product_img"><img src="${Element.img}" alt="">
          <a href="categories.html" class="${Element.tag}"></a>
          </div>
          <div class="product__content">
          <a href="#" class="product__text">${Element.desc}</a>
          <div class="product__price">$${Element.price}</div>
          </div>
          </div>
          `;
    });
  }

// Choose img 
  let mainImg = document.querySelector(".productBigImg");
  let subsImg = document.querySelectorAll(".productImg");

  subsImg.forEach(element => {
    element.addEventListener("click", event => imgSelector(event));
  });

// Removing active class from all elements & adding the class to the target img
  function imgSelector(event){
    subsImg.forEach(element => element.classList.remove("productImg-aktiv"));
    event.target.classList.add("productImg-aktiv");
    mainImg.src = event.target.getAttribute("src");
  }

// Quantity counter (arrow up & down)
  let quantity = document.querySelector("#counter");
  let iconUp = document.querySelector("#icon-up");
  let iconDown = document.querySelector("#icon-down");
  
  iconUp.addEventListener("click", () => quantity.innerHTML = ++quantity.innerHTML);
  iconDown.addEventListener("click", () => {
    quantity.innerHTML = (quantity.innerHTML > 0) ? --quantity.innerHTML: 0   /* Conditional (ternary) operator */
  });
});

/* 
let thumb1 = document.querySelector(".thumb1");
let thumb2 = document.querySelector(".thumb2");
let thumb3 = document.querySelector(".thumb3");
let thumb4 = document.querySelector(".thumb4");

thumb1.addEventListener("click", event => {
  thumb1.classList.add("productImg-aktiv");
  thumb2.classList.remove("productImg-aktiv");
  thumb3.classList.remove("productImg-aktiv");
  thumb4.classList.remove("productImg-aktiv");
});

thumb2.addEventListener("click", event => {
  thumb2.classList.add("productImg-aktiv");
  thumb1.classList.remove("productImg-aktiv");
  thumb3.classList.remove("productImg-aktiv");
  thumb4.classList.remove("productImg-aktiv");
});

thumb3.addEventListener("click", event => {
  thumb3.classList.add("productImg-aktiv");
  thumb1.classList.remove("productImg-aktiv");
  thumb2.classList.remove("productImg-aktiv");
  thumb4.classList.remove("productImg-aktiv");
});

thumb4.addEventListener("click", event => {
  thumb4.classList.add("productImg-aktiv");
  thumb1.classList.remove("productImg-aktiv");
  thumb2.classList.remove("productImg-aktiv");
  thumb3.classList.remove("productImg-aktiv");
});

*/
