document.addEventListener("DOMContentLoaded", function() {
  // Sorter drop-down
  let dropdown3 = document.querySelector(".sorter");
  let nav_category3 = document.querySelector(".sorting__list");

  nav_category3.style.transition = "all 0.3s";
  dropdown3.addEventListener("mouseover", function() {
    nav_category3.style.opacity = "1";
    nav_category3.style.top = "calc(100% + -10px)";
    nav_category3.style.visibility = "visible";

    dropdown3.addEventListener("mouseout", function() {
      fadeOut3(nav_category3);
    });
  });

  function fadeOut3(nc) {
    nc.style.opacity = "0";
    nc.style.top = "calc(100% + 20px)";
    nc.style.visibility = "hidden";
  }

  // Products
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
    },
    {
      img: "pictures/product_5.jpg",
      desc: "Smart Phone",
      price: 170,
      tag: "none"
    },
    {
      img: "pictures/product_6.jpg",
      desc: "Smart Phone",
      price: 240,
      tag: "product__hot"
    },
    {
      img: "pictures/product_7.jpg",
      desc: "Smart Phone",
      price: 70,
      tag: "none"
    },
    {
      img: "pictures/product_8.jpg",
      desc: "Smart Phone",
      price: 490,
      tag: "product__hot-red"
    },
    {
      img: "pictures/product_9.jpg",
      desc: "Smart Phone",
      price: 410,
      tag: "product__hot-red"
    },
    {
      img: "pictures/product_10.jpg",
      desc: "Smart Phone",
      price: 365,
      tag: "product__hot-red"
    },
    {
      img: "pictures/product_11.jpg",
      desc: "Smart Phone",
      price: 195,
      tag: "product__hot-red"
    },
    {
      img: "pictures/product_12.jpg",
      desc: "Smart Phone",
      price: 580,
      tag: "product__hot-red"
    }
  ];

  //Sorting box
  document.querySelector(".sorter").addEventListener("click", function(event) {
    if (event.target.localName == "li") {
      document.querySelector(".option").textContent = event.target.textContent;
    }
  });

  document.querySelector(".default").addEventListener("click", function() {
    sortDefault();
    renderProducts();
  });

  document.querySelector(".price").addEventListener("click", function() {
    sortPrice();
    renderProducts();
  });

  document.querySelector(".desc").addEventListener("click", function() {
    sortDesc();
    renderProducts();
  });

  // Sorting function - Create index as key in list
  products.map((product, idx) => {
    product.index = idx;
    return product;
  });

  function sortDefault() {
    products.sort((a, b) => a.index - b.index);
  }

  function sortPrice() {
    products.sort((a, b) => a.price - b.price);
  }

  function sortDesc() {
    products.sort((a, b) => {
      if (a.desc < b.desc) {
        return -1;
      } else if (a.desc > b.desc) {
        return 1;
      } else {
        return 0;
      }
    });
  }

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
            <a href="./product.html" class="product__text">${Element.desc}</a>
            <div class="product__price">$${Element.price}</div>
            </div>
            </div>
            `;
    });
  }

  // Showing results
  let amount = document.querySelectorAll(".product__container .product").length;

  document.querySelector(".counter").textContent = `Showing ${amount} results`;
});

