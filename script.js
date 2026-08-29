let cart = [];

// Add to cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCartCount();

    alert(name + " added to cart 🛒");
}


// Update cart number
function updateCartCount() {

    document.getElementById("cart-count").textContent = cart.length;

}


// Open cart
// function openCart() {

//     if (cart.length === 0) {
//         alert("Cart is empty 🛒");
//         return;
//     }

//     let message = "Your Cart:\n\n";
//     let total = 0;

//     cart.forEach((item, index) => {
//         message += `${index + 1}. ${item.name} - ₦${item.price}\n`;
//         total += item.price;
//     });

//     message += `\nTotal: ₦${total}`;

//     alert(message);
// }

function openCart() {

    document
        .getElementById("cart-panel")
        .classList.add("active");

    displayCart();
}
function closeCart() {

    document
        .getElementById("cart-panel")
        .classList.remove("active");
}
function displayCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty 🛒</p>";
        cartTotal.textContent = 0;
        return;
    }

    cart.forEach((item, index) => {

        const div = document.createElement("div");

        div.innerHTML = `
            <p>
            ${item.name} - ₦${item.price}
            <button onclick="removeItem(${index})">-<button>
            </p>
        `;

        cartItems.appendChild(div);

        total += item.price;
    });

    cartTotal.textContent = total;
}
function removeItem(index) {

    cart.splice(index, 1);

    updateCartCount();

    displayCart();
}