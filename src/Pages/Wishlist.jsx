import React from 'react';
import { Link } from 'react-router';
import ProductCards from '../Components/ProductCards';
import useProducts from '../Components/Hooks/useProducts';

const Wishlist = () => {
  const { products, loading, error } = useProducts();

  // Example wishlist items (you can replace with actual wishlist data later)
  const wishlistItems = products.slice(0, 3);

  if (loading) {
    return <p className="text-center text-lg mt-10">Loading wishlist...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">Error loading wishlist.</p>
    );
  }

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl text-amber-600 font-bold">My Wishlist</h1>
        <Link to="/home" className="btn btn-outline bg-amber-400 rounded-xl">
          Back to Home
        </Link>
      </div>

      {/* Empty state */}
      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Your wishlist is empty. Start adding your favorite products!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
