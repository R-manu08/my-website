import { products } from './data.js';

let cart = [];

// DOM Elements
const grids = {
    cakes: document.getElementById('cakes-grid'),
    cupcakes: document.getElementById('cupcakes-grid'),
    cookies: document.getElementById('cookies-grid')
};
const cartCount = document.getElementById('cart-count');

// Render Products
function renderProducts() {
    products.forEach(product => {
        const grid = grids[product.category];
        if (!grid) return;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}');"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="product-price">₹${product.price} / ${product.unit}</span>
                <p>${product.desc}</p>
                <button class="btn" style="margin-top: 1rem; width: 100%;" onclick="window.addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Cart Logic
window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
};

function updateCartCount() {
    cartCount.innerText = cart.length;
}

window.checkout = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const phone = "918923294341";
    let message = "Hi Gunnuu Bakers, I would like to order:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        total += item.price;
    });

    message += `\n*Total: ₹${total}*`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
