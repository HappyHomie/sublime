document.addEventListener("DOMContentLoaded", function() {
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

  let mainImg = document.querySelector(".productBigImg");
  let subsImg = document.querySelectorAll(".productImg");

  subsImg.forEach(element => {
    element.addEventListener("click", event => {
      /* mainImg.src = event.target.src; */
      mainImg.src = event.target.getAttribute("src");
    });
  });

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
});
/* 
subsImg.forEach(element => {
  subsImg.addEventListener("click", _addClasses()
  );
});

function _removeClasses() {
  for (var i = 1; i < subsImg.length; i++) {
    subsImg[i].classList.remove('productImg-aktiv')
  }
}
function _addClasses() {
  console.log('I am clicked');
  subsImg[0].classList.add('productImg-aktiv');
  if (subsImg[0]) _addClasses();
  }
 */
