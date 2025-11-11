export default function OrderCard({ order }) {
  return (
    <div className={`bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-md ${order.status === 'New' ? 'border border-primary/50' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <p className="font-bold text-slate-800 dark:text-white text-lg">{order.id}</p>
          <p className="text-slate-600 dark:text-slate-300">{order.customer}</p>
        </div>
        <div className={`flex items-center gap-2 ${order.type === 'Delivery' ? 'bg-[#3498DB]/20 text-[#3498DB]' : 'bg-[#9B59B6]/20 text-[#9B59B6]'} px-3 py-1 rounded-full text-sm font-medium`}>
          <span className="material-symbols-outlined text-base">{order.type === 'Delivery' ? 'delivery_dining' : 'shopping_bag'}</span>
          <span>{order.type}</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
        <span>{order.time}</span>
        <span className="font-semibold">{order.items} Items</span>
        <span>Due in: {order.due}</span>
      </div>
      {order.details && (
        <div className="border-t border-slate-700 pt-3 mb-4">
          <p className="text-slate-600 dark:text-slate-300 text-sm">{order.details}</p>
          {order.notes && <p className="text-slate-600 dark:text-slate-300 text-sm mt-1"><span className="font-semibold">Notes:</span> {order.notes}</p>}
        </div>
      )}
      <div className="flex justify-between items-center">
        {order.paid && <span className="text-green-400 font-bold">PAID</span>}
        <button className="flex w-full max-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Accept Order</span>
        </button>
      </div>
    </div>
  );
}
