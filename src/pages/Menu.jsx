import { useState } from 'react';
import { orders } from '../mock-data';
import AddItemModal from '../components/AddItemModal';

// Create a unique list of menu items from the orders data
const initialMenuItems = orders.flatMap(order => order.items.map(item => item.name))
  .filter((value, index, self) => self.indexOf(value) === index)
  .map((name, index) => ({
    id: index + 1,
    name,
    description: 'A delicious pizza made with fresh ingredients.',
    price: (Math.random() * 10 + 15).toFixed(2), // Random price for variety
    imageUrl: `https://source.unsplash.com/random/400x300/?pizza&sig=${index}` // Random pizza images
  }));


export default function Menu() {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (newItem) => {
    setMenuItems(currentItems => [newItem, ...currentItems]);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Menu</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
            <span className="material-symbols-outlined">add</span>
            Add New Item
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white dark:bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">${item.price}</span>
                <button className="text-sm font-semibold text-primary hover:underline">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddItem={handleAddItem}
      />
    </div>
  );
}
