import React from 'react';
import { Link } from 'react-router';
import ProductCards from '../Components/ProductCards';
import useProducts from '../Components/Hooks/useProducts';

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Error loading products!</p>
    );

  const featuredProducts = products.slice(0, 6); // show first 6 products

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl text-amber-600 font-bold">Featured Products</h1>
        <Link
          to="/products"
          className="btn btn-outline bg-amber-400 rounded-xl"
        >
          See All Products
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
