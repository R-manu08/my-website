import { products as defaultProducts } from './data.js';

const PRODUCTS_KEY = 'gunnuu_products';
let cart = JSON.parse(localStorage.getItem('gunnuu_cart')) || [];
let displayProducts = [];

// DOM Elements
const cartCount = document.getElementById('cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    renderProducts();
    updateCartUI();
});

// Initialize Products (Seed if empty)
function initializeProducts() {
    const stored = localStorage.getItem(PRODUCTS_KEY);
    if (!stored) {
        // First run: Seed with defaults
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(defaultProducts));
        displayProducts = defaultProducts;
    } else {
        displayProducts = JSON.parse(stored);
    }
}

// Render Products
function renderProducts() {
    // Clear grids first to avoid duplicates if re-rendering
    ['cakes-grid', 'cupcakes-grid', 'cookies-grid'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    });

    displayProducts.forEach(product => {
        const grid = document.getElementById(`${product.category}-grid`);
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
    const product = displayProducts.find(p => p.id === id);
    if (product) {
        cart.push(product);
        saveCart();
        updateCartUI();
        showToast(`${product.name} added to cart!`);
    }
};

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
};

window.toggleCart = () => {
    cartOverlay.classList.toggle('active');
};

function saveCart() {
    localStorage.setItem('gunnuu_cart', JSON.stringify(cart));
}

function updateCartUI() {
    if (cartCount) cartCount.innerText = cart.length;

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                    <div>
                        <h4>${item.name}</h4>
                        <small>₹${item.price}</small>
                    </div>
                </div>
                <button onclick="window.removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        if (cartTotal) cartTotal.innerText = `₹${total}`;
    }
}

// WhatsApp Checkout
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

// Toast Notification
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerText = message;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
