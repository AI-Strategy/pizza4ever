import React from 'react';

const OrderSummary = () => (
  <div className="flex flex-col rounded-xl bg-surface-subtle dark:bg-dark-surface-subtle p-8">
    <div className="flex flex-col">
      <div className="flex min-w-72 flex-col gap-2">
        <h2 className="text-content dark:text-dark-content text-4xl font-extrabold leading-tight tracking-tight">Your Order</h2>
        <p className="text-content-subtle dark:text-dark-content-subtle text-base font-normal leading-normal">This is gonna be <strong className="font-semibold text-content dark:text-dark-content">pawsitively</strong> delicious.</p>
      </div>
    </div>
    <div className="mt-8 flex-1 space-y-4 overflow-y-auto pr-2">
      {/* Order items would be rendered here */}
      <div className="flex min-h-[72px] items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-4">
          <div className="aspect-square size-16 rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAl4KnY0qkz-HQspk4vNw8LHfTTsJf5UKMSlPHQvKjrUSMXlTIS0reUo5NpkBw3n9edH8IscqtnbWUsZY0TpKITR19jBZFiUlDITkTf6mLtYX6wbcuoBzKRBCo7QTx_FOK8eGguVDH9tRFL-frnKpL6q-VU0xVF_gZOwt7xrUR9KTPl31IlwtOjx6_tqvZNFn1Y0EtW7QpXs9UTVJ8mk4KFUc2Ssyo9AZPLrU7mAGhk3_DzfW8ht_GT4XfQRAvaVWgEmlZ9FVFhP8")' }}></div>
          <div>
            <p className="text-content dark:text-dark-content line-clamp-1 text-base font-bold">The Bear Necessities Pizza</p>
            <p className="text-content-subtle dark:text-dark-content-subtle line-clamp-2 text-sm font-normal">1x</p>
          </div>
        </div>
        <div className="shrink-0"><p className="text-content dark:text-dark-content text-base font-medium">$24.00</p></div>
      </div>
       <div className="flex min-h-[72px] items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-4">
          <div className="aspect-square size-16 rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEhTz7LgeifFm3E0eir-ikaxOMMWca5jE8Ex47FDxPcsu2qbDikRjP8_Q1BTQy6uyipgGsqQlmt4VuVbPlcgqN76V6xXt004pLv9n7SIxUxPZDCQWZrLO3AGt1pfcXzUAWNNFxIQGle0969upkc8XokBeuxg9-rcZtrifoiUh9-x_FTEOfEbVckjtdWoKT32h0bYpPp-OTLTg-2x5wQstGh7DdNOUMg2zeSGh0KEDZ-lNAatkLJsZE4EB0jdkkI88VarTcQ0IXij4")' }}></div>
          <div>
            <p className="text-content dark:text-dark-content line-clamp-1 text-base font-bold">Garlic Breadsticks</p>
            <p className="text-content-subtle dark:text-dark-content-subtle line-clamp-2 text-sm font-normal">1x</p>
          </div>
        </div>
        <div className="shrink-0"><p className="text-content dark:text-dark-content text-base font-medium">$8.00</p></div>
      </div>
    </div>
    <div className="mt-auto border-t border-surface-strong/50 dark:border-dark-surface-strong pt-6">
      <div className="space-y-3">
        <div className="flex justify-between gap-x-6"><p className="text-content-subtle dark:text-dark-content-subtle text-base font-normal">Subtotal</p><p className="text-content-subtle dark:text-dark-content text-base font-medium text-right">$32.00</p></div>
        <div className="flex justify-between gap-x-6"><p className="text-content-subtle dark:text-dark-content-subtle text-base font-normal">Tax (8%)</p><p className="text-content-subtle dark:text-dark-content text-base font-medium text-right">$2.56</p></div>
      </div>
      <div className="mt-4 flex justify-between gap-x-6 border-t border-surface-strong/50 dark:border-dark-surface-strong pt-4">
        <p className="text-content dark:text-dark-content text-xl font-bold">Total</p><p className="text-content dark:text-dark-content text-xl font-bold text-right">$34.56</p>
      </div>
    </div>
  </div>
);

const PaymentDetails = () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-extrabold text-content dark:text-dark-content">Payment</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <button className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary/10 p-6 text-center text-content dark:text-dark-content transition-colors hover:bg-primary/20">
          <span className="material-symbols-outlined text-4xl text-primary">credit_card</span>
          <span className="font-bold">Credit/Debit</span>
        </button>
        {/* Other payment options */}
      </div>
    </div>
    <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-extrabold text-content dark:text-dark-content">Add a Tip?</h3>
        {/* Tip options */}
    </div>
    <div className="mt-auto flex flex-col gap-4 pt-4">
        <button className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-5 text-xl font-extrabold text-primary-contrast shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]">
            Pay $41.47
        </button>
    </div>
  </div>
);

const CheckoutPage = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-12 lg:grid-cols-2">
      <OrderSummary />
      <PaymentDetails />
    </div>
  );
};

export default CheckoutPage;
