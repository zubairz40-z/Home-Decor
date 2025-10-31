import React from 'react';
import useProducts from '../Components/Hooks/useProducts';
import { Link } from 'react-router';
import ProductCards from '../Components/ProductCards';

const Products = () => {
  const { products } = useProducts();
  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl text-amber-600 font-bold">All Products</h1>
        <Link to="/home" className="btn btn-outline bg-amber-400 rounded-xl">
          Back
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
