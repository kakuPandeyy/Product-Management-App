import { createContext, useContext, useState, useEffect } from 'react';
import data from './data';
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    sortDescending();
  }, []);

  const sortDescending = () => {
    // 1. Create a copy to avoid direct mutation
    // 2. Sort using (b - a) logic
    const sortedData = [...products].sort((a, b) => b.id - a.id);
    setProducts(sortedData);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
