function addToCart(itemName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage or create a new one
    cart.push(itemName); // Add item to the cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
    window.location.href = "cart.html"; // Redirect to cart page
}