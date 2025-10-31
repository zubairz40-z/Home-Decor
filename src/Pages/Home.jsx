import React from 'react';
import { useLoaderData } from 'react-router';
import Products from './Products';
import ProductCards from '../Components/ProductCards';

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
