import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get('./furnitureData.json') // use .get() to fetch JSON
      .then((res) => {
        setProducts(res.data); // ✅ set products here
      })
      .catch((err) => {
        setError(err); // set error if fetching fails
      })
      .finally(() => {
        setLoading(false); // stop loading
      });
  }, []);

  return { products, loading, error };
};

export default useProducts;
