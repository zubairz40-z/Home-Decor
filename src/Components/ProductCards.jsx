import React from 'react';

const ProductCards = ({ product }) => {
  const { name, image, price, category } = product;

  return (
    <div className="card bg-white border border-amber-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out  max-w-sm overflow-hidden">
      {/* Image Section */}
      <figure className="h-64 overflow-hidden relative">
        <img
          className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
          src={image}
          alt={name}
        />
        <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body px-6 py-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Crafted from high-quality{' '}
          <span className="font-medium">oak and mahogany</span> wood — stylish,
          durable, and made to last.
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-amber-700">${price}</p>
          <button className="btn btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white rounded-full px-5">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
