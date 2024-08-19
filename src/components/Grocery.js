import React from "react";

const Grocery = () => {
  const items = [
    { id: 1, name: "Apples", price: "$2.99/lb" },
    { id: 2, name: "Bananas", price: "$0.99/lb" },
    { id: 3, name: "Carrots", price: "$1.49/lb" },
    { id: 4, name: "Broccoli", price: "$1.99/lb" },
    { id: 5, name: "Tomatoes", price: "$2.49/lb" },
    { id: 6, name: "Potatoes", price: "$0.79/lb" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-pink-900 text-white p-4 text-center text-2xl font-bold">
        Our Grocery Store
      </header>

      <main className="p-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Available Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.price}</p>
              <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Grocery;
