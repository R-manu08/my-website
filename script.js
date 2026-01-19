// Product Data Management
const PRODUCTS_KEY = 'gunnuu_products';

const CAKES = [
    { id: 1, name: "Chocolate Truffle", category: "cakes", price: "₹1200 / kg", desc: "Rich, dark chocolate ganache layered with soft sponge.", image: "images/chocolate-truffle-cake.jpg" },
    { id: 2, name: "KitKat Oreo Cake", category: "cakes", price: "₹1300 / kg", desc: "Overloaded with KitKats and Oreos for the ultimate crunch.", image: "images/kitkat-oreo-cake.jpg" },
    { id: 3, name: "Chocolate Birthday Cake", category: "cakes", price: "₹1200 / kg", desc: "Festive chocolate cake with cigar rolls and sprinkles.", image: "images/chocolate-birthday-cake.jpg" }
];

const CUPCAKES = [
    { id: 4, name: "Cupcakes", category: "cupcakes", price: "₹80 / pc", desc: "Soft, fluffy cupcakes with creamy frosting.", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Black Forest Cake", category: "cupcakes", price: "₹1000 / kg", desc: "Classic chocolate sponge with cherries and whipped cream.", image: "images/blackforest-cake.jpg" },
    { id: 6, name: "Fresh Buns", category: "cupcakes", price: "₹40 / pc", desc: "Soft, oven-fresh buns perfect for snacks.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "Millets Bread", category: "cupcakes", price: "₹60 / loaf", desc: "Healthy and nutritious bread made with millets.", image: "images/millets-bread.jpg" }
];

const COOKIES = [
    { id: 8, name: "Pookiee Cookiee", category: "cookies", price: "₹500 / 500g", desc: "Our signature cookie! Chocochip, Double Chocochip, and Butter.", image: "images/pookie-cookie.jpg" },
    { id: 9, name: "Choco Chip Lovers", category: "cookies", price: "₹450 / 500g", desc: "Classic crunchy chocolate chip cookies.", image: "images/choco-chip-cookie.jpg" },
    { id: 10, name: "Nankhati (Air Fried)", category: "cookies", price: "₹400 / 500g", desc: "Traditional Indian shortbread cookies, baked to perfection.", image: "images/nankhati.jpg" }
];

const DEFAULT_PRODUCTS = [...CAKES, ...CUPCAKES, ...COOKIES];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Data
    if (!localStorage.getItem(PRODUCTS_KEY)) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    }

    // 2. Render Products
    renderProducts();

    // 3. Navbar Interaction (Existing Code)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '&#10005;' : '&#9776;';
        });
    }

    // 4. Smooth Scrolling (Existing Code)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '&#9776;';
                }
            }
        });
    });
});

function renderProducts() {
    const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY) || '[]');

    const grids = {
        'cakes': document.getElementById('cakes-grid'),
        'cupcakes': document.getElementById('cupcakes-grid'),
        'cookies': document.getElementById('cookies-grid')
    };

    // Clear grids
    Object.values(grids).forEach(grid => {
        if (grid) grid.innerHTML = '';
    });

    products.forEach(product => {
        const grid = grids[product.category];
        if (grid) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image" style="background-image: url('${product.image}');"></div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="product-price">${product.price}</span>
                    <p>${product.desc}</p>
                </div>
            `;
            grid.appendChild(card);
        }
    });
}
