// components/Checkout/CheckoutForm.js
export default function CheckoutForm({ customerInfo, handleInfoChange, handleSubmit }) {
    return (
      <div className="border border-gray-400 p-6 mb-6">
        <h2 className="text-2xl font-medium mb-6">Shipping Information</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={customerInfo.firstName}
                onChange={handleInfoChange}
                required
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={customerInfo.lastName}
                onChange={handleInfoChange}
                required
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInfoChange}
                required
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInfoChange}
                required
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
              />
              <p className="text-xs text-gray-500 mt-1">10-digit mobile number</p>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address *</label>
            <textarea
              name="address"
              value={customerInfo.address}
              onChange={handleInfoChange}
              required
              rows="3"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">City *</label>
              <input
                type="text"
                name="city"
                value={customerInfo.city}
                onChange={handleInfoChange}
                required
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">State *</label>
              <input
                type="text"
                name="state"
                value={customerInfo.state}
                onChange={handleInfoChange}
                required
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={customerInfo.pincode}
                onChange={handleInfoChange}
                required
                pattern="[0-9]{6}"
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-black"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={customerInfo.country}
              onChange={handleInfoChange}
              disabled
              className="w-full border border-gray-300 p-2 bg-gray-100"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    );
  }
  