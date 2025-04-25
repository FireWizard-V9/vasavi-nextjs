// lib/productService.js

// Mock database
const products = {
    "ebon-aura": {
    name: "EBON AURA LEATHER JACKET",
    type: "leather jacket",
    price: "RS.12,999.00",
    collection: "Julley Ladakh",
    id: "ebon-aura",
    description: "INSPIRED BY THE RUGGED, SERENE LANDSCAPES OF LADAKH, THIS JACKET SEAMLESSLY BLENDS THE BOLDNESS OF BLACK LEATHER WITH THE REFINED SOFTNESS OF GREY SUEDE.",
    imageSrc: "/assets/images/collection_3.jpg"
  },
  "shanti-noir": {
    name: "SHANTI NOIR JACKET",
    type: "leather jacket",
    price: "RS.9,999.00",
    collection: "Julley Ladakh",
    id: "shanti-noir",
    description: "A STATEMENT PIECE THAT CAPTURES THE ESSENCE OF TRANQUILITY MERGED WITH BOLD DESIGN, CRAFTED WITH PREMIUM MATERIALS FOR LASTING COMFORT.",
    imageSrc: "/assets/images/shanti_noir.jpg"
  },
  "tundra-guard": {
    name: "TUNDRA GUARD JACKET",
    type: "insulated jacket",
    price: "RS.9,999.00",
    collection: "Julley Ladakh",
    id: "tundra-guard",
    description: "DESIGNED FOR THE HARSH WINTERS OF THE HIMALAYAS, THIS JACKET PROVIDES EXCEPTIONAL WARMTH WITHOUT COMPROMISING ON STYLE OR MOBILITY.",
    imageSrc: "/assets/images/collection_4.jpg"
  },
  "echoes-of-past": {
    name: "ECHOES OF PAST JACKET",
    type: "vintage jacket",
    price: "RS.3,299.00",
    collection: "Disrupt",
    id: "echoes-of-past",
    description: "A MODERN INTERPRETATION OF VINTAGE DESIGN, THIS JACKET TELLS A STORY OF HERITAGE WHILE EMBRACING CONTEMPORARY SENSIBILITIES.",
    imageSrc: "/assets/images/echoes_of_past.jpg"
  },
  "sashimi": {
    name: "SASHIMI JACKET",
    type: "jacket",
    price: "RS.2,699.00",
    collection: "Disrupt",
    id: "sashimi",
    description: "A BOLD STATEMENT PIECE WITH UNIQUE CUTS AND PATTERNS INSPIRED BY JAPANESE PRECISION AND ARTISTRY.",
    imageSrc: "/assets/images/sashimi.webp"
  },
  "trippulse": {
    name: "TRIPPULSE JACKET",
    type: "jacket",
    price: "RS.3,699.00",
    collection: "Jackets",
    id: "trippulse",
    description: "DESIGNED FOR THE MODERN EXPLORER, THIS JACKET FEATURES INNOVATIVE MATERIALS AND CUTTING-EDGE DESIGN.",
    imageSrc: "/assets/images/trippulse.webp"
  },
  "warpnet": {
    name: "WARPNET JACKET",
    type: "jacket",
    price: "RS.3,499.00",
    collection: "Jackets",
    id: "warpnet",
    description: "A FUTURISTIC TAKE ON CLASSIC OUTERWEAR, FEATURING A UNIQUE TEXTURED PATTERN AND ADVANCED FUNCTIONALITY.",
    imageSrc: "/assets/images/warpnet.webp"
  },
  "zip-go": {
    name: "ZIP & GO JACKET",
    type: "jacket",
    price: "RS.2,699.00",
    collection: "Disrupt",
    id: "zip-go",
    description: "THE ULTIMATE CONVENIENCE IN OUTERWEAR, DESIGNED FOR QUICK TRANSITIONS AND EVERYDAY VERSATILITY.",
    imageSrc: "/assets/images/zipgo.webp"
  },
  "blue-cargo": {
    name: "BLUE CARGO PANTS",
    type: "bottoms",
    price: "RS.2,899.00",
    collection: "Bottoms",
    id: "blue-cargo",
    description: "FUNCTIONAL AND STYLISH CARGO PANTS IN A VIBRANT BLUE SHADE, PERFECT FOR BOTH UTILITY AND FASHION.",
    imageSrc: "/assets/images/collection_6.jpg"
  },
  "chillinos": {
    name: "CHILLINOS PANTS",
    type: "bottoms",
    price: "RS.2,399.00",
    collection: "Best Sellers",
    id: "chillinos",
    description: "RELAXED YET REFINED PANTS THAT COMBINE THE COMFORT OF CASUAL WEAR WITH THE POLISH OF DRESS PANTS.",
    imageSrc: "/assets/images/collecpage_4.jpg"
  },
  "parachute-pants": {
    name: "PARACHUTE PANTS",
    type: "bottoms",
    price: "RS.2,399.00",
    collection: "Best Sellers",
    id: "parachute-pants",
    description: "INSPIRED BY VINTAGE UTILITY WEAR, THESE PANTS FEATURE A LOOSE FIT AND MULTIPLE POCKETS FOR STYLE AND FUNCTION.",
    imageSrc: "/assets/images/collecpage_8.jpg"
  },
  "ember-slate": {
    name: "EMBER SLATE PANTS",
    type: "bottoms",
    price: "RS.2,900.00",
    collection: "Bottoms",
    id: "ember-slate",
    description: "SOPHISTICATED PANTS IN A RICH SLATE COLOR WITH SUBTLE EMBER UNDERTONES, DESIGNED FOR VERSATILE STYLING.",
    imageSrc: "/assets/images/ember.webp"
  },
  "dark-knight": {
    name: "DARK KNIGHT PANTS",
    type: "bottoms",
    price: "RS.3,000.00",
    collection: "Bottoms",
    id: "dark-knight",
    description: "SLEEK, ALL-BLACK PANTS WITH MODERN DETAILING AND A TAILORED FIT FOR A BOLD, CONTEMPORARY LOOK.",
    imageSrc: "/assets/images/dark_knight.webp"
  },
  "rogue-split": {
    name: "ROGUE SPLIT PANTS",
    type: "bottoms",
    price: "RS.3,800.00",
    collection: "Bottoms",
    id: "rogue-split",
    description: "INNOVATIVE SPLIT-LEG DESIGN CREATES A UNIQUE SILHOUETTE THAT CHALLENGES TRADITIONAL PANT CONSTRUCTION.",
    imageSrc: "/assets/images/rogue.webp"
  },
  "corsetica": {
    name: "CORSETICA CORSET",
    type: "corset",
    price: "RS.1,699.00",
    collection: "Disrupt",
    id: "corsetica",
    description: "A MODERN TAKE ON TRADITIONAL CORSETRY, FEATURING CLEAN LINES AND CONTEMPORARY MATERIALS FOR EVERYDAY WEARABILITY.",
    imageSrc: "/assets/images/corsetica.webp"
  },
  "elysian-curve": {
    name: "ELYSIAN CURVE CORSET",
    type: "corset",
    price: "RS.3,499.00",
    collection: "Best Sellers",
    id: "elysian-curve",
    description: "INSPIRED BY CLASSICAL AESTHETICS, THIS CORSET CREATES A GRACEFUL SILHOUETTE WITH PREMIUM FABRICS AND EXPERT CONSTRUCTION.",
    imageSrc: "/assets/images/elysian.webp"
  },
  "embody-grace": {
    name: "EMBODY GRACE CORSET",
    type: "corset",
    price: "RS.3,599.00",
    collection: "Best Sellers",
    id: "embody-grace",
    description: "ELEGANTLY DESIGNED TO ENHANCE THE NATURAL FORM, THIS CORSET COMBINES COMFORT WITH SOPHISTICATED STYLE.",
    imageSrc: "/assets/images/collecpage_6.jpg"
  },
  "raw-allure": {
    name: "RAW ALLURE CORSET",
    type: "corset",
    price: "RS.2,399.00",
    collection: "Corsets",
    id: "raw-allure",
    description: "EMBRACING TEXTURAL CONTRAST AND UNFINISHED EDGES, THIS CORSET BRINGS AN EDGY, ARTISTIC APPROACH TO TRADITIONAL FORMS.",
    imageSrc: "/assets/images/rawallure.webp"
  },
  "serene-drape": {
    name: "SERENE DRAPE CORSET",
    type: "corset",
    price: "RS.4,699.00",
    collection: "Corsets",
    id: "serene-drape",
    description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
    imageSrc: "/assets/images/serene.webp"
  },
  "boxed-breeze": {
    name: "BOXED BREEZE",
    type: "disrupt",
    price: "₹2,599.00",
    collection: "disrupt",
    id: "boxed-breeze",
    description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
    imageSrc: "/assets/images/collecpage_1.jpg"
  },
  "boxed-breeze": {
  name: "BOXED BREEZE",
  type: "disrupt",
  price: "₹2,599.00",
  collection: "disrupt",
  id: "boxed-breez",
  description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
  imageSrc: "/assets/images/collecpage_1.jpg"
},
"khadella": {
  name: "KHADELLA JACKET",
  type: "jacket",
  price: "RS.3,499.00",
  collection: "Julley Ladakh",
  id: "khadella",
  description: "A PREMIUM JACKET INSPIRED BY TRADITIONAL LADAKHI CRAFTSMANSHIP, FEATURING AUTHENTIC DESIGN ELEMENTS AND DURABLE MATERIALS FOR MOUNTAIN ENVIRONMENTS.",
  imageSrc: "/assets/images/collecpage_2.jpg"
},
"sleek-mode": {
  name: "SLEEK MODE JACKET",
  type: "jacket",
  price: "RS.2,800.00",
  collection: "Julley Ladakh",
  id: "sleek-mode",
  description: "MINIMALIST DESIGN MEETS MOUNTAIN FUNCTIONALITY IN THIS SLEEK JACKET THAT TRANSITIONS EFFORTLESSLY FROM URBAN SETTINGS TO RUGGED LANDSCAPES.",
  imageSrc: "/assets/images/collecpage_3.jpg"
},
"dreamwave": {
  name: "DREAMWAVE JACKET",
  type: "jacket",
  price: "RS.3,800.00",
  collection: "Julley Ladakh",
  id: "dreamwave",
  description: "FLOWING LINES AND ETHEREAL DESIGN ELEMENTS CAPTURE THE SPIRITUAL ESSENCE OF LADAKH'S MOUNTAIN LANDSCAPES IN THIS STATEMENT PIECE.",
  imageSrc: "/assets/images/collecpage_5.jpg"
},
"cropped-tundra-guard": {
  name: "CROPPED TUNDRA GUARD",
  type: "jacket",
  price: "RS.8,000.00",
  collection: "Julley Ladakh",
  id: "cropped-tundra-guard",
  description: "A MODERN CROPPED VERSION OF OUR CLASSIC TUNDRA GUARD, DESIGNED FOR VERSATILITY WHILE MAINTAINING THE WARMTH AND PROTECTION OF THE ORIGINAL.",
  imageSrc: "/assets/images/collecpage_7.jpg"
},
    // Add more products here
  };
  
  // Get a specific product by ID
  export function getProduct(id) {
    return products[id] || null;
  }
  
  // Get all products
  export function getAllProducts() {
    return Object.values(products);
  }
  
  // Get products by category
  export function getProductsByCategory(category) {
    return Object.values(products).filter(product => 
      product.type.toLowerCase().includes(category.toLowerCase()));
  }
  
  // Get products by collection
  export function getProductsByCollection(collection) {
    return Object.values(products).filter(product => 
      product.collection.toLowerCase() === collection.toLowerCase());
  }
  
  // Add a new product (admin functionality)
  export function addProduct(product) {
    if (!product.id) {
      throw new Error("Product ID is required");
    }
    products[product.id] = product;
    return product;
  }
  
  // Update an existing product (admin functionality)
  export function updateProduct(id, productData) {
    if (!products[id]) {
      throw new Error(`Product with ID ${id} not found`);
    }
    products[id] = { ...products[id], ...productData };
    return products[id];
  }
  
  // Delete a product (admin functionality)
  export function deleteProduct(id) {
    if (!products[id]) {
      throw new Error(`Product with ID ${id} not found`);
    }
    const product = products[id];
    delete products[id];
    return product;
  }