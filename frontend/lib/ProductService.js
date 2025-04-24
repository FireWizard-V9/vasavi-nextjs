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