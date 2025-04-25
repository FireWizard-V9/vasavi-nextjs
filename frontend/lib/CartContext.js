// lib/CartContext.js
"use client";
import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Initialize cart from localStorage on client-side only
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart data:", e);
        setCartItems([]);
      }
    }
    setIsInitialized(true);
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      // Dispatch event for Navbar to detect cart changes
      window.dispatchEvent(new Event('cartUpdated'));
    }
  }, [cartItems, isInitialized]);
  
  // Helper function to extract numeric price value correctly
  const extractPriceValue = (priceString) => {
    // Remove both RS. and ₹ prefixes
    const withoutPrefix = priceString.replace(/^(RS\.|₹)/i, '');
    // Remove all commas and convert to float
    return parseFloat(withoutPrefix.replace(/,/g, ''));
  };
  
  
  const addToCart = (product, size = 'M') => {
    // Extract the numeric price value correctly
    const priceValue = extractPriceValue(product.price);
    
    // Log the extracted price value for debugging
    console.log(`Original price: ${product.price}, Extracted value: ${priceValue}`);
    
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.size === size
      );
      
      if (existingItemIndex > -1) {
        // Item exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: product.price, // Store the original price string
          priceValue: priceValue, // Store numeric value for calculations
          image: product.imageSrc,
          size: size,
          quantity: 1
        }];
      }
    });
  };
  
  const removeFromCart = (id, size) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.size === size))
    );
  };
  
  const updateQuantity = (id, size, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id && item.size === size) {
          return { 
            ...item, 
            quantity: Math.max(1, item.quantity + change) 
          };
        }
        return item;
      })
    );
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
  };
  
  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      calculateSubtotal,
      isInitialized
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
