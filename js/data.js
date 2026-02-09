export const products = [
    // Cakes
    {
        id: 1,
        name: "Chocolate Truffle",
        category: "cakes",
        price: 1200,
        unit: "kg",
        desc: "Rich, dark chocolate ganache layered with soft sponge.",
        flavors: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"],
        image: "assets/images/chocolate-truffle-cake.jpg"
    },
    {
        id: 2,
        name: "KitKat Oreo Cake",
        category: "cakes",
        price: 1300,
        unit: "kg",
        desc: "Overloaded with KitKats and Oreos for the ultimate crunch.",
        flavors: ["Standard"],
        image: "assets/images/kitkat-oreo-cake.jpg"
    },
    {
        id: 3,
        name: "Chocolate Birthday Cake",
        category: "cakes",
        price: 1200,
        unit: "kg",
        desc: "Festive chocolate cake with cigar rolls and sprinkles.",
        flavors: ["Chocolate", "Coffee", "Hazelnut"],
        image: "assets/images/chocolate-birthday-cake.jpg"
    },
    {
        id: 11,
        name: "Fresh Fruit Cake",
        category: "cakes",
        price: 1100,
        unit: "kg",
        desc: "Light vanilla sponge topped with seasonal fresh fruits.",
        flavors: ["Vanilla", "Pineapple", "Mixed Fruit"],
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Rasmalai Cake",
        category: "cakes",
        price: 1400,
        unit: "kg",
        desc: "Fusion cake with cardamom sponge and rasmalai filling.",
        flavors: ["Rose", "Kesar Pista", "Classic"],
        image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

    // Jar Cakes
    {
        id: 13,
        name: "Jar Cakes",
        category: "jarcakes",
        price: 150,
        unit: "jar",
        desc: "Portable happiness in a jar! Perfect for gifting or solo treats.",
        flavors: ["Red Velvet", "Chocolate Truffle", "Blueberry", "Rasmalai", "Biscoff"],
        image: "https://images.unsplash.com/photo-1582292671510-189d53c7c254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

    // Cupcakes & Breads
    {
        id: 4,
        name: "Cupcakes",
        category: "cupcakes",
        price: 80,
        unit: "pc",
        desc: "Soft, fluffy cupcakes with creamy frosting.",
        flavors: ["Vanilla", "Chocolate", "Red Velvet", "Blueberry"],
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Black Forest Cake",
        category: "cakes",
        price: 1000,
        unit: "kg",
        desc: "Classic chocolate sponge with cherries and whipped cream.",
        flavors: ["Classic"],
        image: "assets/images/blackforest-cake.jpg"
    },
    {
        id: 6,
        name: "Fresh Buns",
        category: "cupcakes",
        price: 40,
        unit: "pc",
        desc: "Soft, oven-fresh buns perfect for snacks.",
        flavors: ["Plain", "Stuffed"],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Millets Bread",
        category: "cupcakes",
        price: 60,
        unit: "loaf",
        desc: "Healthy and nutritious bread made with millets.",
        flavors: ["Ragi", "Multigrain"],
        image: "assets/images/millets-bread.jpg"
    },

    // Cookies & Brownies
    {
        id: 14,
        name: "Fudgy Brownies",
        category: "brownies",
        price: 120,
        unit: "pc",
        desc: "Gooey, rich chocolate brownies.",
        flavors: ["Walnut", "Double Chocolate", "Nutella", "Biscoff"],
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Pookiee Cookiee",
        category: "cookies",
        price: 500,
        unit: "500g",
        desc: "Our signature cookie! Chocochip, Double Chocochip, and Butter.",
        flavors: ["Choco Chip", "Double Choco", "Butter"],
        image: "assets/images/pookie-cookie.jpg"
    },
    {
        id: 9,
        name: "Choco Chip Lovers",
        category: "cookies",
        price: 450,
        unit: "500g",
        desc: "Classic crunchy chocolate chip cookies.",
        flavors: ["Classic"],
        image: "assets/images/choco-chip-cookie.jpg"
    },
    {
        id: 10,
        name: "Nankhati (Air Fried)",
        category: "cookies",
        price: 400,
        unit: "500g",
        desc: "Traditional Indian shortbread cookies.",
        flavors: ["Cardamom", "Pista"],
        image: "assets/images/nankhati.jpg"
    },

    // New additions: Donuts, Cheesecakes, Dream Cakes
    {
        id: 15,
        name: "Gourmet Donuts",
        category: "donuts",
        price: 90,
        unit: "pc",
        desc: "Fluffy, glazed donuts with premium toppings.",
        flavors: ["Chocolate Glaze", "Strawberry sprinkles", "Biscoff", "Nutella"],
        image: "https://images.unsplash.com/photo-1551024601-5637ade98e30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        name: "Cheesecake Slice",
        category: "cheesecakes",
        price: 250,
        unit: "slice",
        desc: "Creamy, rich cheesecake with a buttery crust.",
        flavors: ["Blueberry", "Lotus Biscoff", "New York Style", "Nutella"],
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 17,
        name: "Dream Cake (Tins)",
        category: "dreamcakes",
        price: 600,
        unit: "tin",
        desc: "5-layer chocolate dream cake in a reusable tin.",
        flavors: ["Chocolate Overload", "Tiramisu"],
        image: "https://images.unsplash.com/photo-1627993079943-7023165b406e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];
