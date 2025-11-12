import { useState } from 'react';

export default function CheckoutPage() {
  const [orderItems, setOrderItems] = useState([
    { name: 'The Bear Necessities Pizza', quantity: 1, price: 24.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAl4KnY0qkz-HQspk4vNw8LHfTTsJf5UKMSlPHQvKjrUSMXlTIS0reUo5NpkBw3n9edH8IscqtnbWUsZY0TpKITR19jBZFiUlDITkTf6mLtYX6wbcuoBzKRBCo7QTx_FOK8eGguVDH9tRFL-frnKpL6q-VU0xVF_gZOwt7xrUR9KTPl31IlwtOjx6_tqvZNFn1Y0EtW7QpXs9UTVJ8mk4KFUc2Ssyo9AZPLrU7mAGhk3_DzfW8ht_GT4XfQRAvaVWgEmlZ9FVFhP8' },
    { name: 'Garlic Breadsticks', quantity: 1, price: 8.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEhTz7LgeifFm3E0eir-ikaxOMMWca5jE8Ex47FDxPcsu2qbDikRjP8_Q1BTQy6uyipgGsqQlmt4VuVbPlcgqN76V6xXt004pLv9n7SIxUxPZDCQWZrLO3AGt1pfcXzUAWNNFxIQGle0969upkc8XokBeuxg9-rcZtrifoiUh9-x_FTEOfEbVckjtdWoKT32h0bYpPp-OTLTg-2x5wQstGh7DdNOUMg2zeSGh0KEDZ-lNAatkLJsZE4EB0jdkkI88VarTcQ0IXij4' },
    { name: 'Fountain Drink', quantity: 2, price: 3.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ayc1bEU7jI12Vh57KgOgSt6DNXlG2gMx2ESmJp9pSIfVdTDVW6r-V7Y-n6f81tH0jNXhf2kF2tsKaJj7VZ6HkNSQsAgtVlpYwj-OsbPhBbMZaQRq-120XOnZVLulxTa9XsSxgB7-K_1gq28A1egCnN7G9kIsZGsamN8JvP-hUiK0wQQGglyAFTDlYknc9Si3lvEZk3QH_IrIQIezMQsLL6QyT631Dp4p4nlT8PP-uZcEjVwjefmEV3mlsXbJ-AHeMqGInLaiJnU' },
  ]);
  const [tipPercentage, setTipPercentage] = useState(0.20);
  const [message, setMessage] = useState('');

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const tip = subtotal * tipPercentage;
  const total = subtotal + tax + tip;

  const handleCheckout = async () => {
    setMessage('');
    try {
      const response = await fetch('http://localhost:3001/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: orderItems.map(({ name, quantity }) => ({ name, quantity })),
          total: subtotal, // Sending subtotal as per backend logic, adjust if needed
          customer: 'WebApp Customer' // Mock customer
        }),
      });
      if (response.ok) {
        setMessage('Order placed successfully! Your order number is ' + (await response.json()).id);
        setOrderItems([]);
      } else {
        setMessage('There was an error placing your order.');
      }
    } catch (error) {
      setMessage('Could not connect to the server.');
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-white">
      <main className="flex flex-1 flex-col px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col rounded-xl bg-background-dark dark:bg-[#221610] p-6 shadow-lg">
            {/* Order Summary Section */}
            <h1 className="text-4xl font-black">Your Order</h1>
            <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-2">
              {orderItems.map(item => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="size-14 rounded-lg object-cover" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-[#baa69c]">{item.quantity}x</p>
                    </div>
                  </div>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
             <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex justify-between py-2 text-sm">
                    <p className="text-[#baa69c]">Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between py-2 text-sm">
                    <p className="text-[#baa69c]">Tax (8%)</p>
                    <p>${tax.toFixed(2)}</p>
                </div>
                 <div className="flex justify-between py-2 text-sm">
                    <p className="text-[#baa69c]">Tip ({tipPercentage*100}%)</p>
                    <p>${tip.toFixed(2)}</p>
                </div>
                <div className="flex justify-between py-3 text-lg font-bold">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {/* Payment Section */}
            <h3 className="text-2xl font-bold">Payment</h3>
            {/* Tip Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[0.18, 0.20, 0.25, 0].map(p => (
                    <button key={p} onClick={() => setTipPercentage(p)} className={`rounded-lg p-4 text-center border-2 ${tipPercentage === p ? 'border-primary bg-primary/20' : 'border-white/20 hover:bg-white/10'}`}>
                        <span className="text-xl font-bold">{p > 0 ? `${p*100}%` : 'Custom'}</span>
                    </button>
                ))}
            </div>

            <button onClick={handleCheckout} className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-5 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105">
                Pay ${total.toFixed(2)}
            </button>
            {message && <p className="text-center text-lg mt-4">{message}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
