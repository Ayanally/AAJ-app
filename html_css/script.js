let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const addcartButtons = document.querySelectorAll(".btn");
const CartContent = document.querySelector(".cart-content");

addcartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const ProductBox = event.target.closest(".item-box");
        addToCart(ProductBox);
    });
});

function addToCart(ProductBox) {
    const prodImg = ProductBox.querySelector("img").src;
    const prodTitle = ProductBox.querySelector(".product-name").textContent;

    let existingItem = cartItems.find(item => item.title === prodTitle);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cartItems.push({ img: prodImg, title: prodTitle, qty: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
}

function updateCart() {
    CartContent.innerHTML = ""; 

    cartItems.forEach(item => {
        const CartBox = document.createElement("div");
        CartBox.classList.add("cart-item");

        CartBox.innerHTML = `
            <img src="${item.img}" alt="${item.title}" width="50">
            <div class="cart-detail">
                <h2 class="cart-product-name">${item.title}</h2>
                <div class="quantity cart-controls">
                    <button class="qty-btn decrement">-</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn increment">+</button>
                </div>
            </div>
            <button class="remove-btn">🗑️ Remove</button>
        `;

        CartContent.appendChild(CartBox);

        const decrementBtn = CartBox.querySelector(".decrement");
        const incrementBtn = CartBox.querySelector(".increment");
        const qtyValue = CartBox.querySelector(".qty-value");
        const removeBtn = CartBox.querySelector(".remove-btn");

        decrementBtn.addEventListener("click", () => {
            if (item.qty > 1) {
                item.qty--;
                qtyValue.textContent = item.qty;
            } else {
                cartItems = cartItems.filter(cartItem => cartItem.title !== item.title);
                updateCart();
            }
        });

        incrementBtn.addEventListener("click", () => {
            item.qty++;
            qtyValue.textContent = item.qty;
        });

        removeBtn.addEventListener("click", () => {
            cartItems = cartItems.filter(cartItem => cartItem.title !== item.title);
            updateCart();
        });
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));
}

window.onload = updateCart;