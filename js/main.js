// js/main.js

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
}

// Function to display cart items
function displayCart() {
    const cartTable = document.querySelector('.cart-page table tbody');
    if (!cartTable) return;

    cart.forEach(item => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price}`;
        row.appendChild(priceCell);

        cartTable.appendChild(row);
    });
}

// Event listener for adding to cart buttons
document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-to-cart');

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.getAttribute('data-name'),
                price: button.getAttribute('data-price'),
                quantity: 1
            };
            addToCart(product);
        });
    });

    // Display cart if on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
});
