import { products as defaultProducts } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Try to load from LocalStorage (Live Database updated by Admin)
    let storedProducts = JSON.parse(localStorage.getItem('gunnuu_products'));

    // Fallback to default file data if nothing in storage
    const products = (storedProducts && storedProducts.length > 0) ? storedProducts : defaultProducts;

    const grid = document.getElementById('catalogue-grid');

    // Group products by category
    const categories = {
        'cakes': 'Signature Cakes',
        'jarcakes': 'Jar Cakes (New!)',
        'cupcakes': 'Cupcakes & Breads',
        'brownies': 'Brownies & More',
        'cookies': 'Cookies & Biscuits',
        'donuts': 'Gourmet Donuts',
        'cheesecakes': 'Cheesecakes',
        'dreamcakes': 'Trending Dream Cakes'
    };

    // Helper function to capitalize first letter
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    Object.keys(categories).forEach(catKey => {
        const catProducts = products.filter(p => p.category === catKey);

        if (catProducts.length > 0) {
            const section = document.createElement('section');
            section.className = 'category-section';

            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = `<h2>${categories[catKey]}</h2>`;
            section.appendChild(header);

            const list = document.createElement('div');
            list.className = 'item-list';

            catProducts.forEach(product => {
                const item = document.createElement('div');
                item.className = 'catalogue-item';

                // Generate Flavor Tags
                let flavorTags = '';
                if (product.flavors && product.flavors.length > 0) {
                    flavorTags = `<div class="flavor-tags">`;
                    product.flavors.forEach(flavor => {
                        flavorTags += `<span class="flavor-tag">${flavor}</span>`;
                    });
                    flavorTags += `</div>`;
                }

                item.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="item-image" onerror="this.src='https://via.placeholder.com/150'">
                    <div class="item-details">
                        <div class="item-header">
                            <span class="item-name">${product.name}</span>
                            <span class="item-price">₹${product.price}</span>
                        </div>
                        <div class="item-desc">${product.desc}</div>
                        ${flavorTags}
                    </div>
                `;
                list.appendChild(item);
            });

            section.appendChild(list);
            grid.appendChild(section);
        }
    });

    console.log("Catalogue Loaded with " + products.length + " products.");
});
