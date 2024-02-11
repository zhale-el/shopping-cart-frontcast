const products = [
  {
    id: 1,
    name: "iPhone 12",
    price: 99,
    image: "./images/iphone-12.png",
  },
  {
    id: 2,
    name: "AirPods",
    price: 89,
    image: "./images/airpods.png",
  },
];

const cart = {
  items: [],
  total: 0,
};

// products information

const renderProducts = () => {
  const productDiv = document.querySelector(".products");
  productDiv.innerHTML = "";

  products.forEach((item, index) => {
    productDiv.innerHTML += `

   <div class="product">
    <div class="product__image">
      <img src="${item.image}"/>
    </div>
    <h2 class="product__title">${item.name}</h2>
    <h3 class="product__price">${item.price} تومان</h3>
    <button class="add-to-cart">افزودن به سبد خرید</button>
  </div>

    `;
  });
};

// cart

const renderCartItems = () => {
  const cartDiv = document.querySelector(".cart__items");
  cartDiv.innerHTML = "";

  const totlaPriceEl = document.querySelector(".cart__total-price");

  let totalPrice = 0;

  // check exist in cart
  if (cart.items.length === 0) {
    cartDiv.innerHTML = "محصولی در سبد خرید وجود ندارد";
  }

  // view product in cart
  cart.items.forEach((item) => {
    totalPrice += item.total;

    cartDiv.innerHTML += `

    <div class="cart__item">
    <div class="col-md-4">
      <button class="cart__item-remove"">حذف</button>
    </div>
    <div class="col-md-4">
      <div class="qty">${item.qty}</div>
    </div>
    <div class="col-md-4">
      <h3 class="cart__item-title">${item.name}</h3>
    </div>
  </div> 

    `;
  });

  totlaPriceEl.innerHTML = `مجموع: ${totalPrice} تومان`;
};

renderCartItems();
renderProducts();
