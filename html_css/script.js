const addcart = document.querySelectorAll(".btn");

addcart.forEach(button => {
    button.addEventListener("click", event => {
        const ProductBox = event.target.closest(".item-box");
        Addcart (ProductBox);
    });
});

const CartContent = document.querySelector(".cart-content");

Addcart = ProductBox => {
    const prodimg = ProductBox.querySelector("img").src;
    const prodTitle = ProductBox.querySelector(".product-name").textContent;

    const CartBox = document.createElement("div");
    CartBox.classList.add("cart-content");

    CartBox.innerHTML = `
    <img src="${prodimg}">
            <div class="cart-detail">
                <h2 class="cart-product-name">${ProdTitle}</h2>
                <div class="quantity">
                    <button id="decrement">-</button>
                    <span id="number">1</span>
                    <button id="increment">+</button>
                </div>
            </div>
            <i class="ri-delete-bin-line"></i>
        `;

    CartContent.appendChild(CartBox);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
};

