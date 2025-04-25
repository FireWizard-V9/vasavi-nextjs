"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMinus,
  faPlus,
  faShoppingBag,
  faTruck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
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
        <div className="animate-pulse flex flex-col items-center">
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="text-gray-300 text-4xl mb-3"
          />
          <p className="text-gray-500">Loading your cart...</p>
        </div>
      </div>
    );
  }

  if (isCartEmpty) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center py-16 bg-gray-50 rounded-lg shadow-sm">
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="text-gray-300 text-5xl mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">
            Your Shopping Bag is empty!
          </h1>
          <p className="mb-6 text-gray-600">
            Browse our collections and add some items to your cart.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-5xl md:text-6xl font-bold mt-10 mb-8 font-[theater]">
        SHOPPING BAG
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items - Left Section */}
        <div className="lg:w-2/3">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="border border-gray-300 hover:border-gray-400 rounded-md p-4 md:p-6 mb-6 flex flex-col md:flex-row md:items-center transition-all duration-200"
            >
              <div className="flex items-start md:w-1/2">
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full w-8 h-8 transition-colors"
                  aria-label="Remove item"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className="w-24 h-28 md:w-28 md:h-32 relative bg-gray-50 mx-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-center rounded"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-medium">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    SIZE: {item.size}
                  </p>
                  <p className="text-sm text-gray-500 md:hidden mt-1">
                    {formatPrice(item.priceValue)} × {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 md:mt-0 md:w-1/2">
                <div className="flex border border-gray-300 rounded md:mx-auto">
                  <button
                    className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors rounded-l"
                    onClick={() => updateQuantity(item.id, item.size, -1)}
                    disabled={item.quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-10 text-center focus:outline-none bg-transparent"
                    aria-label="Quantity"
                  />
                  <button
                    className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors rounded-r"
                    onClick={() => updateQuantity(item.id, item.size, 1)}
                    aria-label="Increase quantity"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <div className="text-right hidden md:block">
                  <span className="text-xl font-medium font-[theater]">
                    {formatPrice(item.priceValue * item.quantity)}
                  </span>
                </div>
              </div>

              <div className="mt-4 md:hidden text-right">
                <span className="text-xl font-medium font-[theater]">
                  {formatPrice(item.priceValue * item.quantity)}
                </span>
              </div>
            </div>
          ))}

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:w-1/3">
          <div className="border border-gray-300 rounded-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6 font-[theater]">
              ORDER SUMMARY
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xl font-bold">Total</span>
              <span className="text-xl font-bold">{formatPrice(total)}</span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-black text-white py-3 mb-4 font-medium hover:bg-gray-800 transition">
                Proceed to checkout
              </button>
            </Link>
            <div className="bg-red-50 border border-red-100 p-3 text-center my-4">
              <p className="text-red-600 text-sm">
                Vasavi never sends payment links via WhatsApp, SMS or email. Pay
                only via Vasavi Website.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium mb-2">We accept</p>
                <div className="flex gap-2">
                  <div className="w-12 h-8 bg-blue-50 border border-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs font-medium">VISA</span>
                  </div>
                  <div className="w-12 h-8 bg-red-50 border border-red-100 rounded flex items-center justify-center">
                    <span className="text-xs font-medium">MC</span>
                  </div>
                  <div className="w-28 h-8 bg-gray-50 border border-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs font-medium">
                      Cash on Delivery
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 space-y-2">
                <p>
                  Prices and delivery costs are not confirmed until you've
                  reached the checkout.
                </p>
                <p>
                  15 days free returns. Read more about{" "}
                  <Link
                    href="#"
                    className="underline hover:text-black transition-colors"
                  >
                    return and refund policy
                  </Link>
                  .
                </p>
                <p>
                  Customers would receive SMS/WhatsApp notifications regarding
                  deliveries on the registered phone number.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
