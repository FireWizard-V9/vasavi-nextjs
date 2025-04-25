// components/Checkout/OrderSummary.js
import Image from "next/image";

export default function OrderSummary({ cartItems, total }) {
  const formatPrice = (price) => {
    return `RS.${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="border border-gray-400 p-6">
      <h2 className="text-2xl font-medium mb-6">Order Summary</h2>
      
      <div className="max-h-80 overflow-y-auto mb-6">
        {cartItems.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex mb-4 pb-4 border-b border-gray-200">
            <div className="w-20 h-24 relative bg-gray-100 mr-4">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-gray-500">Size: {item.size}</p>
              <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              <p className="text-sm font-medium mt-1">
                {formatPrice(item.priceValue * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{formatPrice(total)}</span>
        </div>
        
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>{total >= 1000 ? "Free" : formatPrice(100)}</span>
        </div>
        
        <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-300">
          <span>Total</span>
          <span>{formatPrice(total >= 1000 ? total : total + 100)}</span>
        </div>
      </div>
    </div>
  );
}
