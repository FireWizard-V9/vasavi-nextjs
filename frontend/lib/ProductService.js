// lib/productService.js

// Mock database
const products = {
    "ebon-aura": {
    name: "EBON AURA LEATHER JACKET",
    type: "jacket",
    price: "RS.12,999.00",
    collection: "Julley Ladakh",
    id: "ebon-aura",
    newProduct: false,
    description: "INSPIRED BY THE RUGGED, SERENE LANDSCAPES OF LADAKH, THIS JACKET SEAMLESSLY BLENDS THE BOLDNESS OF BLACK LEATHER WITH THE REFINED SOFTNESS OF GREY SUEDE.",
    imageSrc: "/assets/images/collection_3.jpg"
  },
  "shanti-noir": {
    name: "SHANTI NOIR JACKET",
    type: "jacket",
    price: "RS.9,999.00",
    collection: "Julley Ladakh",
    id: "shanti-noir",
    newProduct: true,
    description: "A STATEMENT PIECE THAT CAPTURES THE ESSENCE OF TRANQUILITY MERGED WITH BOLD DESIGN, CRAFTED WITH PREMIUM MATERIALS FOR LASTING COMFORT.",
    imageSrc: "/assets/images/shanti_noir.jpg"
  },
  "tundra-guard": {
    name: "TUNDRA GUARD JACKET",
    type: "jacket",
    price: "RS.9,999.00",
    collection: "Julley Ladakh",
    id: "tundra-guard",
    newProduct: false,
    description: "DESIGNED FOR THE HARSH WINTERS OF THE HIMALAYAS, THIS JACKET PROVIDES EXCEPTIONAL WARMTH WITHOUT COMPROMISING ON STYLE OR MOBILITY.",
    imageSrc: "/assets/images/collection_4.jpg"
  },
  "echoes-of-past": {
    name: "ECHOES OF PAST JACKET",
    type: "jacket",
    price: "RS.3,299.00",
    collection: "Disrupt",
    id: "echoes-of-past",
    newProduct: true,
    description: "A MODERN INTERPRETATION OF VINTAGE DESIGN, THIS JACKET TELLS A STORY OF HERITAGE WHILE EMBRACING CONTEMPORARY SENSIBILITIES.",
    imageSrc: "/assets/images/echoes_of_past.jpg"
  },
  "sashimi": {
    name: "SASHIMI JACKET",
    type: "jacket",
    price: "₹2,699.00",
    collection: "Disrupt",
    id: "sashimi",
    newProduct: false,
    description: "A BOLD STATEMENT PIECE WITH UNIQUE CUTS AND PATTERNS INSPIRED BY JAPANESE PRECISION AND ARTISTRY.",
    imageSrc: "/assets/images/sashimi.webp"
  },
  "trippulse": {
    name: "TRIPPULSE JACKET",
    type: "jacket",
    price: "₹3,699.00",
    collection: "Jackets",
    id: "trippulse",
    newProduct: false,
    description: "DESIGNED FOR THE MODERN EXPLORER, THIS JACKET FEATURES INNOVATIVE MATERIALS AND CUTTING-EDGE DESIGN.",
    imageSrc: "/assets/images/trippulse.webp"
  },
  "warpnet": {
    name: "WARPNET JACKET",
    type: "jacket",
    price: "₹3,499.00",
    collection: "Jackets",
    id: "warpnet",
    newProduct: false,
    description: "A FUTURISTIC TAKE ON CLASSIC OUTERWEAR, FEATURING A UNIQUE TEXTURED PATTERN AND ADVANCED FUNCTIONALITY.",
    imageSrc: "/assets/images/warpnet.webp"
  },
  "zip-go": {
    name: "ZIP & GO JACKET",
    type: "jacket",
    price: "₹2,699.00",
    collection: "Disrupt",
    id: "zip-go",
    newProduct: false,
    description: "THE ULTIMATE CONVENIENCE IN OUTERWEAR, DESIGNED FOR QUICK TRANSITIONS AND EVERYDAY VERSATILITY.",
    imageSrc: "/assets/images/zipgo.webp"
  },
  "blue-cargo": {
    name: "BLUE CARGO PANTS",
    type: "bottoms",
    price: "₹2,899.00",
    collection: "Bottoms",
    id: "blue-cargo",
    newProduct: false,
    description: "FUNCTIONAL AND STYLISH CARGO PANTS IN A VIBRANT BLUE SHADE, PERFECT FOR BOTH UTILITY AND FASHION.",
    imageSrc: "/assets/images/collection_6.jpg"
  },
  "chillinos": {
    name: "CHILLINOS PANTS",
    type: "bottoms",
    price: "₹2,399.00",
    collection: "Best Sellers",
    id: "chillinos",
    newProduct: false,
    description: "RELAXED YET REFINED PANTS THAT COMBINE THE COMFORT OF CASUAL WEAR WITH THE POLISH OF DRESS PANTS.",
    imageSrc: "/assets/images/collecpage_4.jpg"
  },
  "parachute-pants": {
    name: "PARACHUTE PANTS",
    type: "bottoms",
    price: "₹2,399.00",
    collection: "Best Sellers",
    id: "parachute-pants",
    newProduct: false,
    description: "INSPIRED BY VINTAGE UTILITY WEAR, THESE PANTS FEATURE A LOOSE FIT AND MULTIPLE POCKETS FOR STYLE AND FUNCTION.",
    imageSrc: "/assets/images/collecpage_8.jpg"
  },
  "ember-slate": {
    name: "EMBER SLATE PANTS",
    type: "bottoms",
    price: "₹2,900.00",
    collection: "Bottoms",
    id: "ember-slate",
    newProduct: false,
    description: "SOPHISTICATED PANTS IN A RICH SLATE COLOR WITH SUBTLE EMBER UNDERTONES, DESIGNED FOR VERSATILE STYLING.",
    imageSrc: "/assets/images/ember.webp"
  },
  "dark-knight": {
    name: "DARK KNIGHT PANTS",
    type: "bottoms",
    price: "₹3,000.00",
    collection: "Bottoms",
    id: "dark-knight",
    newProduct: false,
    description: "SLEEK, ALL-BLACK PANTS WITH MODERN DETAILING AND A TAILORED FIT FOR A BOLD, CONTEMPORARY LOOK.",
    imageSrc: "/assets/images/dark_knight.webp"
  },
  "rogue-split": {
    name: "ROGUE SPLIT PANTS",
    type: "bottoms",
    price: "₹3,800.00",
    collection: "Bottoms",
    id: "rogue-split",
    newProduct: false,
    description: "INNOVATIVE SPLIT-LEG DESIGN CREATES A UNIQUE SILHOUETTE THAT CHALLENGES TRADITIONAL PANT CONSTRUCTION.",
    imageSrc: "/assets/images/rogue.webp"
  },
  "corsetica": {
    name: "CORSETICA CORSET",
    type: "corset",
    price: "₹1,699.00",
    collection: "Disrupt",
    id: "corsetica",
    newProduct: false,
    description: "A MODERN TAKE ON TRADITIONAL CORSETRY, FEATURING CLEAN LINES AND CONTEMPORARY MATERIALS FOR EVERYDAY WEARABILITY.",
    imageSrc: "/assets/images/corsetica.webp"
  },
  "elysian-curve": {
    name: "ELYSIAN CURVE CORSET",
    type: "corset",
    price: "₹3,499.00",
    collection: "Best Sellers",
    id: "elysian-curve",
    newProduct: false,
    description: "INSPIRED BY CLASSICAL AESTHETICS, THIS CORSET CREATES A GRACEFUL SILHOUETTE WITH PREMIUM FABRICS AND EXPERT CONSTRUCTION.",
    imageSrc: "/assets/images/elysian.webp"
  },
  "embody-grace": {
    name: "EMBODY GRACE CORSET",
    type: "corset",
    price: "₹3,599.00",
    collection: "Best Sellers",
    id: "embody-grace",
    newProduct: false,
    description: "ELEGANTLY DESIGNED TO ENHANCE THE NATURAL FORM, THIS CORSET COMBINES COMFORT WITH SOPHISTICATED STYLE.",
    imageSrc: "/assets/images/collecpage_6.jpg"
  },
  "raw-allure": {
    name: "RAW ALLURE CORSET",
    type: "corset",
    price: "₹2,399.00",
    collection: "Corsets",
    id: "raw-allure",
    newProduct: true,
    description: "EMBRACING TEXTURAL CONTRAST AND UNFINISHED EDGES, THIS CORSET BRINGS AN EDGY, ARTISTIC APPROACH TO TRADITIONAL FORMS.",
    imageSrc: "/assets/images/rawallure.webp"
  },
  "serene-drape": {
    name: "SERENE DRAPE CORSET",
    type: "corset",
    price: "₹4,699.00",
    collection: "Corsets",
    id: "serene-drape",
    newProduct: false,
    description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
    imageSrc: "/assets/images/serene.webp"
  },
  "boxed-breeze": {
    name: "BOXED BREEZE",
    type: "shirt",
    price: "₹1,999.00",
    collection: "disrupt",
    id: "boxed-breeze",
    newProduct: false,
    description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
    imageSrc: "/assets/images/collecpage_1.jpg"
  },
"khadella": {
  name: "KHADELLA JACKET",
  type: "shirt",
  price: "RS.2,499.00",
  collection: "best sellers",
  id: "khadella",
  newProduct: true,
  description: "A PREMIUM JACKET INSPIRED BY TRADITIONAL LADAKHI CRAFTSMANSHIP, FEATURING AUTHENTIC DESIGN ELEMENTS AND DURABLE MATERIALS FOR MOUNTAIN ENVIRONMENTS.",
  imageSrc: "/assets/images/collecpage_2.jpg"
},
"sleek-mode": {
  name: "SLEEK MODE JACKET",
  type: "shirt",
  price: "RS.2,499.00",
  collection: "best sellers",
  id: "sleek-mode",
  newProduct: false,
  description: "MINIMALIST DESIGN MEETS MOUNTAIN FUNCTIONALITY IN THIS SLEEK JACKET THAT TRANSITIONS EFFORTLESSLY FROM URBAN SETTINGS TO RUGGED LANDSCAPES.",
  imageSrc: "/assets/images/collecpage_3.jpg"
},
"desert-bloom": {
  name: "DESERT BLOOM",
  type: "shirt",
  price: "₹2,499.00",
  collection: "disrupt",
  id: "desert-bloom",
  newProduct: false,
  description: "A VIBRANT SHIRT INSPIRED BY THE FLORA OF DESERT LANDSCAPES, FEATURING A UNIQUE PATTERN AND LIGHTWEIGHT FABRIC FOR COMFORT.",
  imageSrc: "/assets/images/desertbloom.webp"
},
"field-flannel": {
  name: "FIELD FLANNEL",
  type: "shirt",
  price: "₹2,299.00",
  collection: "disrupt",
  id: "field-flannel",
  newProduct: false,
  description: "A MODERN TAKE ON CLASSIC FLANNEL SHIRTS, FEATURING A UNIQUE TEXTURE AND CUT THAT EMBRACES BOTH STYLE AND FUNCTION.",
  imageSrc: "/assets/images/field.webp"
},
"lucident": {
  name: "LUCIDENT",
  type: "shirt",
  price: "₹2,299.00",
  collection: "shirts",
  id: "lucident",
  newProduct: true,
  description: "A LIGHTWEIGHT SHIRT WITH A TRANSLUCENT EFFECT, PERFECT FOR LAYERING OR STYLING ON ITS OWN FOR A BOLD LOOK.",
  imageSrc: "/assets/images/lucident.webp"
},
"blue-block": {
  name: "BLUE BLOCK",
  type: "tshirt",
  price: "₹1,999.00",
  collection: "disrupt",
  id: "blue-block",
  newProduct: false,
  description: "A BOLD T-SHIRT WITH A STRIKING BLOCK DESIGN, CRAFTED FOR COMFORT AND STYLE, IDEAL FOR CASUAL OUTINGS.",
  imageSrc: "/assets/images/blueblock.webp"
},
"dreamwave": {
  name: "DREAMWAVE",
  type: "tshirt",
  price: "RS.3,800.00",
  collection: "best sellers",
  id: "dreamwave",
  newProduct: false,
  description: "FLOWING LINES AND ETHEREAL DESIGN ELEMENTS CAPTURE THE SPIRITUAL ESSENCE OF LADAKH'S MOUNTAIN LANDSCAPES IN THIS STATEMENT PIECE.",
  imageSrc: "/assets/images/collecpage_5.jpg"
},
"galactic-glow": {
  name: "GALACTIC GLOW",
  type: "tshirt",
  price: "₹1,999.00",
  collection: "disrupt",
  id: "galactic-glow",
  newProduct: true,
  description: "A COSMIC-INSPIRED T-SHIRT WITH A UNIQUE PRINT THAT EMBRACES THE MYSTIQUE OF THE UNIVERSE, PERFECT FOR STARGAZERS.",
  imageSrc: "/assets/images/galacticglow.webp"
},
"good-ol-days": {
  name: "GOOD OL' DAYS",
  type: "tshirt",
  price: "₹1,999.00",
  collection: "disrupt",
  id: "good-ol-days",
  newProduct: true,
  description: "A NOSTALGIC T-SHIRT THAT CELEBRATES THE SIMPLE PLEASURES OF LIFE, FEATURING A CLASSIC DESIGN AND COMFORTABLE FIT.",
  imageSrc: "/assets/images/goodoldays.webp"
},
"ivasav": {
  name: "IVASAV",
  type: "tshirt",
  price: "₹1,999.00",
  collection: "disrupt",
  id: "ivasav",
  newProduct: false,
  description: "A T-SHIRT THAT EMBRACES THE SPIRIT OF ADVENTURE AND DISCOVERY, FEATURING A UNIQUE DESIGN THAT INSPIRES EXPLORATION.",
  imageSrc: "/assets/images/vasavi.webp"
},
"khovar-flow": {
  name: "KHOVAR FLOW",
  type: "tshirt",
  price: "₹1,999.00",
  collection: "disrupt",
  id: "khovar-flow",
  newProduct: false,
  description: "A T-SHIRT THAT EMBRACES THE SPIRIT OF ADVENTURE AND DISCOVERY, FEATURING A UNIQUE DESIGN THAT INSPIRES EXPLORATION.",
  imageSrc: "/assets/images/khovar.webp"
},
"mindwrap": {
  name: "MINDWRAP",
  type: "tshirt",
  price: "₹4,000.00",
  collection: "tshirts",
  id: "mindwrap",
  newProduct: false,
  description: "A T-SHIRT THAT EMBRACES THE SPIRIT OF ADVENTURE AND DISCOVERY, FEATURING A UNIQUE DESIGN THAT INSPIRES EXPLORATION.",
  imageSrc: "/assets/images/mindwrap.webp"
},
"rugged-rebel": {
  name: "RUGGED REBEL",
  type: "tshirt",
  price: "₹1,699.00",
  collection: "disrupt",
  id: "rugged-rebel",
  newProduct: false,
  description: "A BOLD T-SHIRT WITH A STRIKING BLOCK DESIGN, CRAFTED FOR COMFORT AND STYLE, IDEAL FOR CASUAL OUTINGS.",
  imageSrc: "/assets/images/ruggedrebel.webp"
},
"trust-no-limits": {
  name: "TRUST NO LIMITS",
  type: "tshirt",
  price: "₹2,299.00",
  collection: "disrupt",
  id: "trust-no-limits",
  newProduct: false,
  description: "A BOLD T-SHIRT WITH A STRIKING BLOCK DESIGN, CRAFTED FOR COMFORT AND STYLE, IDEAL FOR CASUAL OUTINGS.",
  imageSrc: "/assets/images/trustnolimits.webp"
},
"cropped-tundra-guard": {
  name: "CROPPED TUNDRA GUARD",
  type: "jacket",
  price: "₹8,000.00",
  collection: "Julley Ladakh",
  id: "cropped-tundra-guard",
  newProduct: false,
  description: "A MODERN CROPPED VERSION OF OUR CLASSIC TUNDRA GUARD, DESIGNED FOR VERSATILITY WHILE MAINTAINING THE WARMTH AND PROTECTION OF THE ORIGINAL.",
  imageSrc: "/assets/images/collecpage_7.jpg"
},
// Add these hoodie products to your products object in ProductService.js

"hoodlink": {
  name: "HOODLINK HOODIE",
  type: "hoodie",
  price: "₹3,000.00",
  collection: "Julley Ladakh",
  id: "hoodlink",
  newProduct: false,
  description: "A VERSATILE HOODIE DESIGNED FOR BOTH STYLE AND FUNCTIONALITY, FEATURING PREMIUM MATERIALS AND THOUGHTFUL DETAILS.",
  imageSrc: "/assets/images/hoodlink.webp"
},
"khare-brown": {
  name: "KHARE BROWN HOODIE",
  type: "hoodie",
  price: "₹7,500.00",
  collection: "Julley Ladakh",
  id: "khare-brown",
  newProduct: false,
  description: "LUXURIOUS BROWN HOODIE INSPIRED BY THE EARTHY TONES OF LADAKH'S MOUNTAINS, CRAFTED WITH PREMIUM MATERIALS FOR EXCEPTIONAL COMFORT.",
  imageSrc: "/assets/images/kharebrown.webp"
},
"nomad-evil": {
  name: "NOMAD EVIL HOODIE",
  type: "hoodie",
  price: "₹4,799.00",
  collection: "Julley Ladakh",
  id: "nomad-evil",
  newProduct: false,
  description: "BOLD AND EDGY DESIGN INSPIRED BY THE NOMADIC CULTURES OF THE HIMALAYAS, FEATURING UNIQUE GRAPHICS AND PREMIUM CONSTRUCTION.",
  imageSrc: "/assets/images/nomad.webp"
},
"skydash": {
  name: "SKYDASH HOODIE",
  type: "hoodie",
  price: "₹4,199.00",
  collection: "Julley Ladakh",
  id: "skydash",
  newProduct: false,
  description: "INSPIRED BY THE VAST BLUE SKIES OF LADAKH, THIS HOODIE COMBINES COMFORT WITH A DISTINCTIVE DESIGN THAT STANDS OUT.",
  imageSrc: "/assets/images/skydash.webp"
},
"threaded-harmony": {
  name: "THREADED HARMONY HOODIE",
  type: "hoodie",
  price: "₹3,899.00",
  collection: "Julley Ladakh",
  id: "threaded-harmony",
  newProduct: false,
  description: "A BALANCED BLEND OF TRADITIONAL CRAFTSMANSHIP AND MODERN DESIGN, FEATURING INTRICATE DETAILS AND PREMIUM FABRICS.",
  imageSrc: "/assets/images/threaded.webp"
},
"tso-verdan": {
  name: "TSO VERDAN HOODIE",
  type: "hoodie",
  price: "₹5,199.00",
  collection: "Julley Ladakh",
  id: "tso-verdan",
  newProduct: false,
  description: "INSPIRED BY THE SERENE LAKES OF LADAKH, THIS HOODIE FEATURES CALMING COLORS AND PREMIUM MATERIALS FOR ULTIMATE COMFORT.",
  imageSrc: "/assets/images/tso.webp"
},
"vasatar": {
  name: "VASATAR HOODIE",
  type: "hoodie",
  price: "₹4,200.00",
  collection: "Julley Ladakh",
  id: "vasatar",
  newProduct: true,
  description: "A SIGNATURE PIECE THAT EMBODIES THE ESSENCE OF THE VASAVI BRAND, COMBINING STYLE, COMFORT, AND THOUGHTFUL DESIGN.",
  imageSrc: "/assets/images/vasatar.webp"
}


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
  export function getNewProducts() {
    return Object.values(products).filter(product => product.newProduct === true);
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