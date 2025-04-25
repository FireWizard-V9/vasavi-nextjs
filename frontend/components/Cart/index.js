// components/Cart/index.js
"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faAdd } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/lib/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    calculateSubtotal,
    isInitialized,
  } = useCart();

  const isCartEmpty = cartItems.length === 0;
  const total = calculateSubtotal();
  const formatPrice = (price) => {
    return `RS.${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading cart...
      </div>
    );
  }

  if (isCartEmpty) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">
            Your Shopping Bag is empty!
          </h1>
          <p className="mb-6">
            Browse our collections and add some items to your cart.
          </p>
          <Link
            href="/collections"
            className="text-black underline font-medium hover:text-gray-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // For debugging - log cart items and their prices
  console.log("Cart Items:", cartItems);
  console.log("Total:", total);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-6xl font-bold mt-16 mb-7 font-[theater]">CART</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items - Left Section */}
        <div className="lg:w-2/3">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="border p-6 mb-6 flex items-center border-gray-400"
            >
              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="flex items-center justify-center text-gray-700 border border-gray-400 rounded-full w-[30px] h-[30px] text-center hover:text-red-500 mr-5"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>

              <div className="w-32 h-36 relative bg-gray-100 mr-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>

              <div className="flex-grow">
                <div className="mb-1">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="text-sm">SIZE - {item.size}</p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex border border-gray-300">
                    <button
                      className="px-3 py-1 hover:bg-gray-100"
                      onClick={() => updateQuantity(item.id, item.size, -1)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="w-8 text-center focus:outline-none"
                    />
                    <button
                      className="px-3 py-1 hover:bg-gray-100"
                      onClick={() => updateQuantity(item.id, item.size, 1)}
                    >
                      <FontAwesomeIcon icon={faAdd} />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-medium font-[theater]">
                      {formatPrice(item.priceValue * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:w-1/3 border-gray-400">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span>Discounts</span>
              <Link href="#" className="underline">
                Apply discount
              </Link>
            </div>

            <p className="text-md mb-2">Sign in to use your personal offers!</p>

            <button className="w-full border font-medium border-gray-300 py-3 mb-4">
              Sign in
            </button>

            <hr className="my-6" />

            <div className="flex justify-between mb-10">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <button className="w-full bg-gray-200 text-black py-3 mb-4 font-medium">
              Continue to checkout
            </button>

            <p className="text-red-500 text-md text-center my-4">
              Vasavi never sends payment links via WhatsApp,
              <br />
              SMS or email. Pay only via Vasavi Website.
            </p>

            <div className="mt-8">
              <p className="text-sm mb-2">We accept</p>
              <div className="flex gap-2 mb-8">
                <div className="w-12 h-8 bg-blue-100 flex items-center justify-center">
                  <span>VISA</span>
                </div>
                <div className="w-12 h-8 bg-red-100 flex items-center justify-center">
                  <span>MC</span>
                </div>
                <div className="w-28 h-8 bg-gray-100 flex items-center justify-center">
                  <span>Cash on Delivery</span>
                </div>
              </div>

              <p className="text-md text-gray-500 ">
                Prices and delivery costs are not confirmed until you've reached
                the checkout.
                <br />
                15 days free returns. Read more about{" "}
                <Link href="#" className="underline">
                  return and refund policy
                </Link>
                .<br />
                Customers would receive an SMS/WhatsApp notifications regarding
                deliveries on the registered phone number
              </p>

              <button className="w-full bg-gray-200 flex items-center font-medium justify-center gap-2 py-3 mt-6">
                <span>Delivery and return options</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
