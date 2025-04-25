// lib/email.js
import nodemailer from "nodemailer";

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Format order items for email
const formatOrderItems = (items) => {
  return items.map(item => 
    `${item.name} - Size: ${item.size}, Quantity: ${item.quantity}, Price: RS.${(item.priceValue * item.quantity).toFixed(2)}`
  ).join('\n');
};

// Send order confirmation emails
export async function sendOrderConfirmationEmails(order) {
  const { orderId, customerInfo, items, total, paymentId } = order;
  
  // Format date
  const orderDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Customer email
  const customerEmailContent = `
    Dear ${customerInfo.firstName} ${customerInfo.lastName},
    
    Thank you for your order with Vasavi. Your order has been successfully placed and payment received.
    
    Order Details:
    Order ID: ${orderId}
    Date: ${orderDate}
    Payment ID: ${paymentId}
    
    Items:
    ${formatOrderItems(items)}
    
    Total: RS.${total.toFixed(2)}
    
    Shipping Address:
    ${customerInfo.firstName} ${customerInfo.lastName}
    ${customerInfo.address}
    ${customerInfo.city}, ${customerInfo.state} ${customerInfo.pincode}
    ${customerInfo.country}
    
    We will process your order shortly. You will receive another email when your order ships.
    
    If you have any questions, please contact our customer service.
    
    Thank you for shopping with Vasavi!
  `;
  
  // Admin email
  const adminEmailContent = `
    New Order Received
    
    Order Details:
    Order ID: ${orderId}
    Date: ${orderDate}
    Payment ID: ${paymentId}
    
    Customer Information:
    Name: ${customerInfo.firstName} ${customerInfo.lastName}
    Email: ${customerInfo.email}
    Phone: ${customerInfo.phone}
    
    Shipping Address:
    ${customerInfo.address}
    ${customerInfo.city}, ${customerInfo.state} ${customerInfo.pincode}
    ${customerInfo.country}
    
    Items:
    ${formatOrderItems(items)}
    
    Total: RS.${total.toFixed(2)}
  `;
  
  try {
    // Send email to customer
    await transporter.sendMail({
      from: `"Vasavi Store" <${process.env.EMAIL_USER}>`,
      to: customerInfo.email,
      subject: `Order Confirmation #${orderId}`,
      text: customerEmailContent,
    });
    
    // Send email to admin
    await transporter.sendMail({
      from: `"Vasavi Store" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Order #${orderId}`,
      text: adminEmailContent,
    });
    
    return true;
  } catch (error) {
    console.error("Error sending emails:", error);
    throw error;
  }
}
